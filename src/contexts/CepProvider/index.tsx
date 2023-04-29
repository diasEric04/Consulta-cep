import { initialState } from "./data";
import { CepContext } from './context'
import {reducer} from './reducer'

import { CepContextType } from "./typing";
import { useReducer } from "react";

const CepProvider : CepContextType = ({children}) => {
    const [cepState, cepDispatch] = useReducer(reducer, initialState)
    return (
        <CepContext.Provider value={{cepState, cepDispatch}}> 
            {children}
        </CepContext.Provider>
    )
}

export default CepProvider

export {CepContext}