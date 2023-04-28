//react Imports
import { ReactElement } from "react";

//component imports
import CepProvider from "../../contexts/CepProvider";
import { SearchForm } from "../../components/SearchForm";
//css imports
import './css/styles.css'


export default function App () : ReactElement {
    return(
        <CepProvider> 
            <SearchForm />
        </CepProvider>
    )
}