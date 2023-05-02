import { Component } from "../typing";

import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchButton : Component = () => {
    return (
        <div className="search-button">
             <button type="submit">
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Procurar
            </button>
        </div>
    )
}