import * as types from './types'
import { ActionsType } from './typing'

const search : ActionsType = (dispatch, payload) => dispatch({type : types.SEARCH_CEP, payload})


export {search}