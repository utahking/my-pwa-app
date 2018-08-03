 import axios from 'axios'
import {ActionTypes} from '../constants'
import { ROOT_URL } from './index'
import Action from './action'
import { MerchantState } from '../types'
import {from} from 'rxjs/observable/from'
import { createAction } from 'typesafe-actions'

export interface FetchMerchantAction extends Action {
  meta: {
    id: string
  }
}

export const fetchMerchantApi = (id:string) => {
  const request = axios({
    headers: [],
    method: 'get',
    url: `${ROOT_URL}/merchants/${id}`
  }).then(response => response.data)
  return from(request)
}

export const fetchMerchant = createAction(ActionTypes.FetchMerchant, resolve => {
  return (params:{id:string}) => resolve({  }, params)
})

export const fetchMerchantSuccess = createAction(ActionTypes.FetchMerchantSuccess, resolve => {
  return (payload: MerchantState) => resolve(payload)
})

export const fetchMerchantFailure = createAction(ActionTypes.FetchMerchantFailure, resolve => {
  return (payload: Error) => resolve(payload)
})

export function resetActiveMerchants(): Action {
  return {
    type: ActionTypes.ResetActiveMerchant,
    payload: {}
  }
}