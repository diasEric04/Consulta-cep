import { AddressDataType } from "../typing";

import { useEffect, useState, useContext } from "react";
import { CepContext } from "../../contexts/CepProvider";
import { Data } from "../Data";


export const AddressData : AddressDataType = ({ result }) => {
    const { cepState : {canSearch}} = useContext(CepContext)
    const [activeModal, setActiveModal] = useState(false)
    useEffect( () => {
        setActiveModal(true)
        const timeout = setTimeout(() => {
            setActiveModal(false)
        }, 6000);

        return () => {
            clearTimeout(timeout)
        }
    }, [result])

    const noValue = !canSearch && !result?.loading
    const error = result?.erro
    const loading = result?.loading

    const resultArray : [number, string[]][] = [
        [1, ['cep', result?.cep]],
        [2, ['estado', result?.uf]],
        [3, ['cidade', result?.localidade]],
        [4, ['bairro', result?.bairro]],
        [5, ['rua', result?.logradouro ]],
        [6, ['complemento', result?.complemento]],
        [7, ['ddd', result?.ddd]],
    ]
    return (
        <div className="address-data">
                        
            {resultArray.map( ([id, array]) => (
                <Data key={id} props={{dados : array, error, noValue, loading}}/>
            ))}


            {activeModal  && (
                <div className={`modal ${error ? 'error' : noValue ? 'no-value' : ''}`}>
                    {error ? (
                        <p> 
                            Erro! Não foi possivel encontrar o CEP solicitado
                        </p>
                    ) : noValue ? (
                        <p>
                            Atenção! lembre-se que o CEP a ser pesquisado deve conter apenas 8 digitos
                        </p>
                    ) : (
                        null
                    )}
                </div>
            )} 
        </div>


    )
}