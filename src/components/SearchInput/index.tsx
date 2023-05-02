import { useContext} from 'react'

import { Component, HandleType } from "../typing";
import { SearchContext } from '../../contexts/SearchProvider';
import { setSearchValue } from '../../contexts/SearchProvider/actions';

export const SearchInput : Component = () => {
    
    const {searchState : {searchValue} ,searchDispatch} = useContext(SearchContext)

    const handleType : HandleType = (event : {target : {value : string}}) => {
        let formatedValue = event.target.value
        const lastLetter = formatedValue.substring(formatedValue.length - 1, formatedValue.length)
        
        try {
            if (isNaN(parseInt(lastLetter))) throw new Error()
        } catch {
            formatedValue = formatedValue.substring(0, formatedValue.length - 1)
        }
        setSearchValue(searchDispatch, formatedValue)
    }

    return (
        <div className="search-input">
            <input 
                type="search" 
                value={searchValue} 
                onChange={handleType} 
                placeholder='CEP, Ex: 12345678'
            />
       </div>
    )
}