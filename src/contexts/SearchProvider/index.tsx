import { initialState } from "./data";
import { SearchContext } from './context'
import {reducer} from './reducer'

import { CepContextType } from "./typing";
import { useReducer } from "react";

const SearchProvider : CepContextType = ({children}) => {
    const [searchState, searchDispatch] = useReducer(reducer, initialState)
    return (
        <SearchContext.Provider value={{searchState, searchDispatch}}> 
            {children}
        </SearchContext.Provider>
    )
}

export default SearchProvider

export {SearchContext}