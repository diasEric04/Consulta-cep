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
}

type AddressDataType = (props : { result : CepDataType }) => ReactElement


export type { Component, HandleType, HandleClick, CepDataType, AddressDataType }