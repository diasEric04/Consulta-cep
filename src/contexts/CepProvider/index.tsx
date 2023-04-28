//react imports
import { useReducer } from 'react'
//tipos imports
import { CepProviderType } from "./typing";
//dados imports
import { CepContext } from "./context";
import { reducer } from './reducer';
import { initialState } from './data';

const CepProvider : CepProviderType = ({children}) => {
    const [cepState, cepDispatch] = useReducer(reducer, initialState)
    return (
        <CepContext.Provider value={{cepState, cepDispatch}}>
            {children}
        </CepContext.Provider>
    )
}

export default CepProvider
export {CepContext}