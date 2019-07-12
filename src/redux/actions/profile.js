import * as types from '../types';
import axios from 'axios';
import { URL } from '../../component/Global';

export const getProfile = token => {
  return {
    type: types.GET_PROFILE,
    payload: axios.get(`${URL}profile`, { headers: { Authorization: `Bearer ${token}` } })
  };
};
