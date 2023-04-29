import { ReducerType } from "./typing";
import * as types from './types'

export const reducer : ReducerType = (state, action) => {
    switch(action.type) {
        case types.SEARCH_CEP : {
            return {...state, canSearch : action.payload.canSearch, cep : action.payload.cep}
        }
    }
    return {...state}
}