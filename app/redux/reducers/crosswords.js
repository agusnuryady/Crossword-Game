import * as types from '../types'

const initialValue = {
  data: [],
  isLoading: false,
  isError: false,
  isFinish: false
}

export default (state = initialValue, action) => {
  switch(action.type) {
    case 'GET_LIST_CROSSWORDS_PENDING' :
      return {...state, isLoading: true}
    case 'GET_LIST_CROSSWORDS_FULFILLED' :
      return {...state, isLoading: false, isFinish: true, data: action.payload.data.data}
    case 'GET_LIST_CROSSWORDS_REJECTED' :
      return {...state, isLoading: false, isError: true, data: 'Error Network'}
  }
}