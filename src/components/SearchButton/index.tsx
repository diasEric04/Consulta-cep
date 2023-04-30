import { Component, HandleClick } from "../typing";
import { SearchContext } from "../../contexts/SearchProvider/context";
import { useContext } from "react";
import { search } from "../../contexts/CepProvider/actions";
import { CepContext } from "../../contexts/CepProvider";
import { setSearchValue } from "../../contexts/SearchProvider/actions";

import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchButton : Component = () => {
    const {searchState : {searchValue}, searchDispatch} = useContext(SearchContext)
    const {cepDispatch} = useContext(CepContext)


    const handleClick : HandleClick = () => {
        const canSearch = searchValue.length === 8
        search(cepDispatch, {canSearch, cep : searchValue})
        setSearchValue(searchDispatch, '')
    }

    return (
        <div className="search-button">
             <button type="button" onClick={() => handleClick()}>
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Procurar
            </button>
        </div>
    )
}