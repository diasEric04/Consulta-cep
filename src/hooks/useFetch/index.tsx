import {useState, useRef, useEffect } from 'react'

type UseFetchHook = <ResultType>(url : string, options : Object) => [ResultType, boolean]
const isTypeEquals = (param1 : any, param2 : any) : boolean => {
    return JSON.stringify(param1) === JSON.stringify(param2)
}
export const useFetch : UseFetchHook = <ResultType,>(url : string, options : object) => {
    
    const [result, setResult] = useState<ResultType>(null as ResultType)
    const [loading, setLoading] = useState(false)
    const [shouldLoad, setShouldLoad] = useState(false)

    const urlRef = useRef(url)
    const optionsRef = useRef(options)

    useEffect( () => {
        let changed = false

        if (!isTypeEquals(url, urlRef.current)) {
            urlRef.current = url
            changed = true
        }

        if (!isTypeEquals(options, optionsRef.current)) {
            optionsRef.current = options
            changed = true
        }

        setShouldLoad(s => changed ? !s : s)
    }, [url, options])

    useEffect( () => {
        setLoading(true)

        const controller = new AbortController()
        
        const signal = controller.signal
        
        const fetchData = async() => {
            await new Promise(r => setTimeout(r, 1000))
            try {
                const response = await fetch(urlRef.current, {...optionsRef.current, signal})

                const resultJson = await response.json()

                setResult(resultJson)
                setLoading(false)
            } catch (e) {
                setLoading(false)
                
            }
        }
        fetchData()
        return () => {
            controller.abort()
        }
    }, [shouldLoad])

    return [result, loading]
}