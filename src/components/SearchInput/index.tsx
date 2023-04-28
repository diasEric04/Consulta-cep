import { useState } from 'react'

import { Component, HandleType } from "../typing";

export const SearchInput : Component = () => {
    
    const [value, setValue] = useState('')

    const handleType : HandleType = (event : {target : {value : string}}) => {
        let formatedValue = event.target.value
        const lastLetter = formatedValue.substring(formatedValue.length - 1, formatedValue.length)
        
        try {
            if (isNaN(parseInt(lastLetter))) throw new Error()
        } catch {
            formatedValue = formatedValue.substring(0, formatedValue.length - 1)
        }
        setValue(formatedValue)
    }

    return (
        <input 
            type="search" 
            value={value} 
            onChange={handleType} 
        />
    )
}