import { AddressDataType, CepDataType } from "../typing";

import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck, faInfo, faRotate } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const setIcon = (result : CepDataType, indice : string) => {
    return result.loading ? faRotate : result[indice] ? faCheck : result.erro ? faXmark : faInfo 
}

const setClassName = (result : CepDataType, indice : string) => {
    return result.loading ? 'loading' : result[indice] ? 'success' : result.erro ? 'error' : 'no-value' 
}

export const AddressData : AddressDataType = ({ result }) => {
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
    return (
        <div className="address-data">
            <div>
                <i className={setClassName(result, 'cep')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'cep')} /></span>
                </i>
                <input className={!result?.cep ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.cep ? `cep: ${result.cep}` : 'Cep'}/>
            </div>

            <div>
                <i className={setClassName(result, 'uf')}>
                   <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'uf')} /></span>
                </i>
                <input className={!result?.uf ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.uf ? `estado: ${result.uf}` : 'Estado'}/>
            </div>

            <div>
                <i className={setClassName(result, 'localidade')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'localidade')} /></span>
                </i>
                <input className={!result?.localidade ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.localidade ? `cidade: ${result.localidade}` : 'Cidade'}/>
            </div>

            <div>
                <i className={setClassName(result, 'bairro')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'bairro')} /></span>
                </i>
                <input className={!result?.bairro ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.bairro ? `bairro: ${result.bairro}` : 'Bairro'}/>
            </div>

            <div>

                <i className={setClassName(result, 'logradouro')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'logradouro')} /></span>
                </i>
                <input className={!result?.logradouro ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.logradouro ? `rua: ${result.logradouro}` : 'Rua'}/>
            </div>

            <div>
                <i className={setClassName(result, 'complemento')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'complemento')} /></span>
                </i>
                <input className={!result?.complemento ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.complemento ? `complemento: ${result.complemento}` : 'Complemento'}/>
            </div>

            <div>
                <i className={setClassName(result, 'ddd')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'ddd')} /></span>
                </i>
                <input className={!result?.ddd ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.ddd ? `ddd: ${result.ddd}` : 'DDD'}/>
            </div>

            {activeModal  && (
                result?.erro ? (
                    <div className="modal error-message"> 
                        Erro! Não foi possivel encontrar o CEP solicitado
                    </div>
                ) : !result?.cep && !result?.loading ? (
                    <div className="modal no-value-message">
                        Atenção! lembre-se que o CEP a ser pesquisado deve conter apenas 8 digitos
                    </div>
                ) : (
                    <div></div>
                )
            )}
        </div>


    )
}