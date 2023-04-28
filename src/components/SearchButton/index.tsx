import { Component, HandleClick } from "../typing";

export const SearchButton : Component = () => {
    const handleClick : HandleClick = () => {

    }
    return (
        <button 
            type="button" 
            onClick={() => handleClick()}
        >
            Procurar
        </button>
    )
}