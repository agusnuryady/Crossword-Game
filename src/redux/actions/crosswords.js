import * as types from '../types'
import axios from 'axios'
import { URL } from '../../component/Global'

export const getListCrosswords = () => {
  return {
    type: types.GET_LIST_CROSSWORDS,
    payload: axios.get(`${URL}crosswords`)
  }
}