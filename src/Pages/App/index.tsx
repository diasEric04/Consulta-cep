//react Imports
import { ReactElement, useRef } from "react";

//component imports
import SearchProvider from "../../contexts/SearchProvider";
import CepProvider from "../../contexts/CepProvider";
import { Search } from "../../components/Search";
import { Address } from '../../components/Address'
//css imports
import './css/styles.css'

//jquery
import $ from 'jquery'
import { HandleHamburguerType } from "./typing";



export default function App () : ReactElement {

    const navRef = useRef<HTMLElement>(null)
    const hamburguerRef = useRef<HTMLDivElement>(null)

    const handleHamburguer : HandleHamburguerType = () => {
        if (hamburguerRef.current) {
            $(hamburguerRef.current).find('div').each( function () {
                $(this).toggleClass('active')
            })
        }

        if (navRef.current) {
            $(navRef.current).toggleClass('active')
        }
    }
    return(
        <div className="app">
            <header>
                <div ref={hamburguerRef} className="hamburguer" onClick={handleHamburguer}>
                    <div className="l1"></div>
                    <div className="l2"></div>
                    <div className="l3"></div>
                </div>
                
                <picture>
                    <h1>
                        <a href="/">Eric D.</a>
                    </h1>
                </picture>

                <nav ref={navRef}>
                    <ul>
                        <li className="active">
                            <a href="/">Consultar CEP</a>
                        </li>

                        <li className="disabled">
                            <a href="/">Consultar CPF</a>
                        </li>

                        <li className="disabled">
                            <a href="/">Consultar CNPJ</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <CepProvider>  
                    <SearchProvider> 
                        <Search />    
                    </SearchProvider> 

                    <Address />
                </CepProvider>
            </main>
        </div>
    )
}