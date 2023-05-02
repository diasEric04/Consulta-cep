import { SearchButton } from "../SearchButton";
import { SearchInput } from "../SearchInput";
import { Component } from "../typing";
import { SearchContext } from "../../contexts/SearchProvider/context";
import { useContext } from "react";
import { search } from "../../contexts/CepProvider/actions";
import { CepContext } from "../../contexts/CepProvider";
import { setSearchValue } from "../../contexts/SearchProvider/actions";

export const Search : Component = () => {
    const {searchState : {searchValue}, searchDispatch} = useContext(SearchContext)
    const {cepDispatch} = useContext(CepContext)

    const submitForm = (event : React.FormEvent) => {
        event.preventDefault()
        const canSearch = searchValue.length === 8
        search(cepDispatch, {canSearch, cep : searchValue})
        setSearchValue(searchDispatch, '')
    }
    
    return ( 
        <form className="search-form" onSubmit={submitForm}>
            <SearchInput />
            <SearchButton />
        </form>
    )
}