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
                <AddressData result={{erro : true} as CepDataType} />  //erro
            )
        )
    } else if (!loading) {
        return (
            <AddressData result={{noValue : true} as CepDataType} /> //invalido e inicial
        )
    }

    return <AddressData result={{loading : true} as CepDataType} /> //loading
}