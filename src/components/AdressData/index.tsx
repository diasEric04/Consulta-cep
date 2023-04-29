import { AddressDataType } from "../typing";



export const AddressData : AddressDataType = ({ result }) => {

    return (
        <div className="AddressData">
            <div>
                <input type="text" disabled placeholder={result?.cep ?? 'Cep'}/>
            </div>

            <div>
                <input type="text" disabled placeholder={result?.uf ?? 'Estado'}/>
            </div>

            <div>
                <input type="text" disabled placeholder={result?.localidade ?? 'Cidade'}/>
            </div>

            <div>
                <input type="text" disabled placeholder={result?.bairro ?? 'Bairro'}/>
            </div>

            <div>
                <input type="text" disabled placeholder={result?.logradouro ?? 'Rua'}/>
            </div>

            <div>
                <input type="text" disabled placeholder={result?.complemento ?? 'Complemento'}/>
            </div>

            <div>
                <input type="text" disabled placeholder={result?.ddd ?? 'DDD'}/>
            </div>
        </div>
    )
}