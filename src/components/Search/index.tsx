import { Component } from "../typing";
import { SearchButton } from "../SearchButton";
import { SearchInput } from "../SearchInput";


export const Search : Component = () => {
    return ( //ValueContext
        <form className="search-form">
            <SearchInput />
            <SearchButton />
        </form>
    )
}