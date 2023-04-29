import { ReactNode, ReactElement } from "react"

interface StateType {
    searchValue : string,
}

interface ActionType {
    type : string,
    payload? : any
}
interface ContextType {
    searchState :  StateType
    searchDispatch : DispatchType
}

type DispatchType = React.Dispatch<ActionType>
type ReducerType = (state : StateType, action : ActionType) => StateType
type CepContextType = (props : {children : ReactNode}) => ReactElement

type ActionsType = (dispatch : DispatchType, payload : any) => void

export type {StateType, ContextType, ReducerType, CepContextType, ActionsType}