import { useContext } from "react";
import { CepContext } from "../../contexts/CepProvider";
import { CepDataType, Component } from "../typing";
import { useFetch } from "../../hooks/useFetch";

import { AddressData } from "../AdressData";

export const Address : Component = () => {
    const {cepState : {canSearch, cep}} = useContext(CepContext)

    const [ result, loading] = useFetch<CepDataType>(cep && canSearch ? `https://viacep.com.br/ws/${cep}/json/` : '',{}) 
    
    if (!loading && canSearch) {
        return (
            result && !result?.erro ? (  
                <AddressData result={result}/> //success
            ) : (
                <AddressData result={{} as CepDataType} />  //erro
            )
        )
    } else if (!loading) {
        return (
            <AddressData result={{} as CepDataType} /> //invalido e inicial
        )
    }


    return <p>loading...</p> //loading
}