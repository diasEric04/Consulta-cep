import { DataComponent, HandleBtnClickType } from "../typing";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck, faInfo, faRotate, faSquareCaretUp, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect} from 'react'

import $ from 'jquery'

export const Data : DataComponent = ({props : { dados : [index, valor], error, noValue, loading}}) => { 
    
    
    const windowWidthRef = useRef<number | undefined>(0)
    const windowRef = useRef<Window>(window)

    const [windowWidth, setWindowWidht] = useState($(window).innerWidth())
    const [inputNumChar, setInputNumChar] = useState(0)

    const handleBtnClick : HandleBtnClickType = ( event : { target : EventTarget} ) => {
        $(event.target).closest('button').toggleClass('active')

        $(event.target).closest('button').find('span').toggleClass('active')
        const text = $(event.target).closest('button').find('p').html() === 'show' ? 'hide' : 'show'
        $(event.target).closest('button').find('p').html(text)

        $(event.target).closest('button').parent().find('div.full-data').toggleClass('active')
        $(event.target).closest('button').parent().find('div.full-data').toggleClass('disabled')

        const widthDiv = $(event.target).closest('button').parent().innerWidth()
        const widthButton = $(event.target).closest('button').innerWidth()
        if (typeof widthDiv === 'number' && typeof widthButton === 'number') {
            const width = widthDiv - widthButton - 4
            $(event.target).closest('button').parent().find('div.full-data').css('width', `${width}px`)
        }
    }

    const setIcon = () => {
        return loading ? faRotate : valor ? faCheck : error ? faXmark : faInfo 
    }
    
    const setClassName = () => {
        return loading ? 'loading' : valor ? 'success' : error ? 'error' : 'no-value' 
    }

    const setInputNumCharFn = () => {
        const pixeisPorLetra = windowWidthRef.current && windowWidthRef.current > 680 ? 15 : windowWidthRef.current && windowWidthRef.current > 430 ? 12 : 10
        const widthInput = $('div.data:first').find('input').innerWidth() ?? 0
        const inputMaxChar = Math.floor(widthInput / pixeisPorLetra)
        setInputNumChar(inputMaxChar)
    }

    const setWidthIFD = () => {
        const widthI = $('div.data:first i:first').innerWidth() ?? 0
        $('i.full-data-item').css('width', widthI)
    }

    const setWidthSpanFD = () => {
        const widthInput = $('div.data:first').find('input').innerWidth() ?? 0
        $('span.full-data-item').css('width', widthInput)
    }

    const setWidthDivFD = () => {
        const widthDiv = $('div.data:first').innerWidth() ?? 0
        const widthButton = $('div.data:first').find('button').innerWidth() ?? 0
        const width  = widthDiv - widthButton - 4
        $('div.full-data').css('width', `${width}px`)
    }

    const controlActiveClassName = () => {
        $('div.full-data').each(function () {
            if ($(this).has('active')) {
                $('div.full-data').removeClass('active')
                $('div.full-data').addClass('disabled')
            }
        })
        $('nav').removeClass('active')
        $('.hamburguer').find('div').removeClass('active')
        $('button.showlm').removeClass('active')
        $('div.data button').find('span').removeClass('active')
        $('div.data button').find('p').html('show')
    }

    useEffect( () => {
        setInputNumCharFn()
        setWidthIFD()
        setWidthSpanFD()
    }, [])

    useEffect( () => {
        $(windowRef.current).on('resize', function () {
            setWindowWidht($(window).innerWidth())
            setWidthDivFD()
            controlActiveClassName()
            setWidthIFD()
            setWidthSpanFD()
            setInputNumCharFn()
            return () => {
                $(windowRef.current).off()
            }  
        })
    }, [windowRef])

    useEffect( () => {
        windowWidthRef.current = windowWidth
    }, [windowWidth])

    const insertButton = (value : string) =>  value && value.length > inputNumChar

    const setValue = (value : string) => {
        if (value.length > inputNumChar) {
            return  value.substring(0, inputNumChar).trim() + '...'
        }
        return value
    }

    const valueFirstUC = index[0].toUpperCase()+index.substring(1)
    const valueWithPrefix = `${index}: ${valor}`

    const finalValue = valor ? (valueWithPrefix) : (valueFirstUC)

    const success = !loading && !noValue && !error
    return( 
        <>
        {success ? (
            <div className="data">
                <i className={setClassName()}>
                    <span><FontAwesomeIcon icon={setIcon()} /></span>
                </i>
                <input className={!valor ? 'input-default' : ''} type="text" disabled value={setValue(finalValue)}/>
                {insertButton(finalValue) ? (
                    <button className="showlm" onClick={handleBtnClick}>
                        <p>show</p>
                        <span><FontAwesomeIcon icon={faSquareCaretUp} /></span>
                    </button>
                ) : (
                    <button className="disabled">
                        <p>show</p>
                        <span><FontAwesomeIcon icon={faCircleXmark}/></span>
                    </button>
                )}
                <div className="full-data disabled">
                    <i className="full-data-item"><FontAwesomeIcon icon={faCheck} /></i>
                    <span className="full-data-item">{valor}</span>
                </div>
            </div>
        ) : (
            <div className="data">
                <i className={setClassName()}>
                    <span className={loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon()} /></span>
                </i>
                <input className={'input-default'} type="text" disabled value={loading ? 'loading...' : error ? 'Erro' : valueFirstUC}/>
            </div>
        )}
        </>
    )
}