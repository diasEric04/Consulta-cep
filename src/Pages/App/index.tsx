//react Imports
import { ReactElement } from "react";

//component imports
import SearchProvider from "../../contexts/SearchProvider";
import CepProvider from "../../contexts/CepProvider";
import { Search } from "../../components/Search";
import { Address } from '../../components/Address'
//css imports
import './css/styles.css'


export default function App () : ReactElement {
    return(
        <CepProvider> 
            
            <SearchProvider> 
                <Search />    
            </SearchProvider> 

            <Address />

        </CepProvider>
    )
}