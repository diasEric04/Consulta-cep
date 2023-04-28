import { ReactNode, ReactElement } from "react"

interface StateType {
    searchValue : string
}

interface ActionType {
    type : string,
    payload? : any
}

type DispatchType = React.Dispatch<ActionType>
type ReducerType = (state : StateType, action : ActionType) => StateType
type SearchValueContextType = (props : {children : ReactNode}) => ReactElement

type ContextType = {
    searchValueState :  StateType
    searchValueDispatch : DispatchType
}

export type {StateType, ContextType, ReducerType, SearchValueContextType}