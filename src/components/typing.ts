import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { ReactElement } from 'react'

//search button
type HandleType = ( event : React.ChangeEvent<HTMLInputElement>) => void

//search input
type HandleClick = () => void

//all
type Component = () => ReactElement

//address data
interface CepDataType {
    [key : string] : string | boolean
    cep : string, 
    logradouro : string,
    complemento : string,
    bairro : string,
    localidade : string,
    uf : string,
    ddd : string,
    erro: boolean
    loading : boolean
    noValue : boolean
}

type AddressDataType = (props : { result : CepDataType }) => ReactElement
type HandleBtnClickType = ( event : React.MouseEvent<HTMLButtonElement>) => void
type DataComponent = (props : { props : {dados : string[], noValue : boolean, error : boolean, loading : boolean}}) => ReactElement
type ResultArrayType = [number, string[]][]
type AuxiliarFunctionType = () => void
type SetClassType = () => string
type SetIconType = () => IconDefinition
type SetValueType = (value : string) => string


export type { Component, HandleType, HandleClick, CepDataType, AddressDataType, HandleBtnClickType, DataComponent, 
              ResultArrayType, AuxiliarFunctionType, SetClassType, SetIconType, SetValueType }