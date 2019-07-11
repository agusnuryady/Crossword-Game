import * as types from '../types'
import {storageData} from '../../utils'

const initialValue = {
  data: [],
  isLoading: false,
  isError: false,
  isFinish: false,
  isLoggedIn: false
}

export default (state = initialValue, action) => {
  switch(action.type) {
    case types.LOGIN:
      return {...state, isLoading: true }
    case types.LOGIN_FULFILLED:
      const token = action.payload.data.token
      storageData.saveKey('token', token)
      return {...state, isLoading: false, isFinish: true, isLoggedIn: true, data: token}
    case types.LOGIN_REJECTED:
      return {...state, isLoading: false, isError: true, data: action.payload.response.data.message}
    default:
      return state
  }
}