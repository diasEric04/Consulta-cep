import { Component } from "../typing";
import { SearchButton } from "../SearchButton";
import { SearchInput } from "../SearchInput";

import { SearchValueProvider } from "../../contexts/SearchValueProvider";

export const SearchForm : Component = () => {
    return ( //ValueContext
        <SearchValueProvider>
            <SearchInput />
            <SearchButton />
        </SearchValueProvider>
    )
}