import * as types from './types'
import { ActionsType } from './typing'

const setSearchValue : ActionsType = (dispatch, payload) => dispatch({type : types.SET_SEARCH_VALUE, payload})

export {setSearchValue}