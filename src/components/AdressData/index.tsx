import { AddressDataType, CepDataType } from "../typing";
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck, faInfo, faRotate } from '@fortawesome/free-solid-svg-icons';

const setIcon = (result : CepDataType, indice : string) => {
    return result.loading ? faRotate : result[indice] ? faCheck : result.erro ? faXmark : faInfo 
}

const setClassName = (result : CepDataType, indice : string) => {
    return result.loading ? 'loading' : result[indice] ? 'success' : result.erro ? 'error' : 'no-value' 
}

export const AddressData : AddressDataType = ({ result }) => {

    return (
        <div className="address-data">
            <div>
                <i className={setClassName(result, 'cep')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'cep')} /></span>
                </i>
                <input className={!result?.cep ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.cep || 'Cep'}/>
            </div>

            <div>
                <i className={setClassName(result, 'uf')}>
                   <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'uf')} /></span>
                </i>
                <input className={!result?.uf ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.uf || 'Estado'}/>
            </div>

            <div>
                <i className={setClassName(result, 'localidade')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'localidade')} /></span>
                </i>
                <input className={!result?.localidade ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.localidade || 'Cidade'}/>
            </div>

            <div>
                <i className={setClassName(result, 'bairro')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'bairro')} /></span>
                </i>
                <input className={!result?.bairro ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.bairro || 'Bairro'}/>
            </div>

            <div>

                <i className={setClassName(result, 'logradouro')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'logradouro')} /></span>
                </i>
                <input className={!result?.logradouro ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.logradouro || 'Rua'}/>
            </div>

            <div>
                <i className={setClassName(result, 'complemento')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'complemento')} /></span>
                </i>
                <input className={!result?.complemento ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.complemento || 'Complemento'}/>
            </div>

            <div>
                <i className={setClassName(result, 'ddd')}>
                    <span className={result?.loading ? 'loading' : ''}><FontAwesomeIcon icon={setIcon(result, 'ddd')} /></span>
                </i>
                <input className={!result?.ddd ? 'input-default' : ''} type="text" disabled value={result?.loading ? 'Loading...' : result?.ddd || 'DDD'}/>
            </div>
        </div>
    )
}