import { ReducerType } from "./typing";
import * as types from './types'

export const reducer : ReducerType = (state, action) => {
    switch(action.type) {
        case types.SET_SEARCH_VALUE : {
            return {...state, searchValue : action.payload}
        }
    }
    return {...state}
}