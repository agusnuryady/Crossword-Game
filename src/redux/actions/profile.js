import * as types from '../types'
import axios from 'axios'
import { URL } from '../../component/Global'

export const getProfile = () => {
  return {
    type: types.GET_PROFILE,
    payload: axios.get(`${URL}profile`)
  }
}