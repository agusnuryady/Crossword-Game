import * as types from '../types'
import axios from 'axios'
import { URL } from '../../component/Global'

export const login = user => {
  return {
    type: types.LOGIN,
    payload: axios.post(`${URL}login`, user)
  }
}

export const register = newUser => {
  return {
    type: types.REGISTER,
    payload: axios.post(`${URL}register`, newUser)
  }
}