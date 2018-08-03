 import axios from 'axios'
import {ActionTypes} from '../constants'
import { ROOT_URL } from './index'
import Action from './action'
import {from} from 'rxjs/observable/from'
import { createAction } from 'typesafe-actions'
import { Merchant } from '../common/Merchant'

export const fetchMerchantApi = (id:string) => {
  const request = axios({
    headers: [],
    method: 'get',
    url: `${ROOT_URL}/merchants/${id}`
  }).then(response => response.data)
  return from(request)
}

export const fetchMerchant = createAction(ActionTypes.FetchMerchant, resolve => {
  return (id:string) => resolve(id)
})

export const fetchMerchantSuccess = createAction(ActionTypes.FetchMerchantSuccess, resolve => {
  return (payload: Merchant) => resolve(payload)
})

export const fetchMerchantFailure = createAction(ActionTypes.FetchMerchantFailure, resolve => {
  return (payload: Error) => resolve(payload)
})

export function resetActiveMerchants(): Action<{}> {
  return {
    type: ActionTypes.ResetActiveMerchant,
    payload: {}
  }
}