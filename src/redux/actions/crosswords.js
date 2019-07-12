import * as types from '../types';
import axios from 'axios';
import { URL } from '../../component/Global';

export const getListCrosswords = token => {
  return {
    type: types.GET_LIST_CROSSWORDS,
    payload: axios.get(`${URL}crosswords`, { headers: { Authorization: `Bearer ${token}` } })
  };
};
