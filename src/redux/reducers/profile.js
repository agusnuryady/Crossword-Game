import * as types from '../types';

const initialValue = {
  data: [],
  isLoading: false,
  isError: false,
  isFinish: false
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case types.GET_PROFILE:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_PROFILE_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case types.GET_PROFILE_REJECTED:
      return {
        ...state,
        isLoading: false,
        data: 'Network error'
      };
    default:
      return state;
  }
};
