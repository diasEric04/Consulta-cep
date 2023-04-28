import { Dispatch, ReactElement, ReactNode } from 'react'

interface AddressDataType {
    cep : string,
    logradouro : string,
    complemento : string,
    bairro : string,
    localidade : string,
    uf : string,
    ddd : string,
}

interface StateType {
    addressData : AddressDataType
}

interface ActionType {
    type : string,
    payload? : any
}

interface ContextType {
    cepState : StateType,
    cepDispatch : DispatchType
}
type DispatchType = Dispatch<ActionType>

type ReducerType = (state : StateType, action : ActionType) => StateType
type CepProviderType = (props : { children : ReactNode}) => ReactElement


export type { StateType, ActionType, ContextType, DispatchType, ReducerType, 
              CepProviderType, AddressDataType}
