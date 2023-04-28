import { initialState } from "./data";
import { SearchValueContext } from './context'
import {reducer} from './reducer'

import { SearchValueContextType } from "./typing";
import { useReducer } from "react";

export const SearchValueProvider : SearchValueContextType = ({children}) => {
    const [searchValueState, searchValueDispatch] = useReducer(reducer, initialState)
    return (
        <SearchValueContext.Provider value={{searchValueState, searchValueDispatch}}> 
            {children}
        </SearchValueContext.Provider>
    )
}