 import Axios from 'axios'
import {ActionTypes} from '../constants'
import { ROOT_URL } from './index'
import {from} from 'rxjs/observable/from'
import { createAsyncAction, createAction } from 'typesafe-actions'
import { Merchant } from '../common/Merchant'
import { Observable } from 'rxjs'

export const fetchMerchantApi = (id:string):Observable<Merchant> => {
  const request = Axios.get(`${ROOT_URL}/merchants/${id}`).then(response => response.data)
  return from(request)
}

export const fetchMerchantAsync = createAsyncAction(ActionTypes.FetchMerchant, ActionTypes.FetchMerchantSuccess, ActionTypes.FetchMerchantFailure)<string, Merchant, Error>()

export const fetchMerchantRequest = fetchMerchantAsync.request

export const resetActiveMerchant = createAction(ActionTypes.ResetActiveMerchant)