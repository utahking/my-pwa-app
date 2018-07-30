import axios, { AxiosPromise } from 'axios'
import { Merchant } from '../common/Merchant'
import * as constants from '../constants'
import { ROOT_URL } from './index'
// import { RESET_ACTIVE_MERCHANT } from '../constants';

export interface FetchMerchant {
  type: constants.FETCH_MERCHANT,
  payload: AxiosPromise<any>
}

export interface FetchMerchantSuccess {
  type: constants.FETCH_MERCHANT_SUCCESS,
  payload: Merchant
}


export interface FetchMerchantFailure {
  type: constants.FETCH_MERCHANT_FAILURE,
  payload: any
}

export interface ResetActiveMerchant {
  type: constants.RESET_ACTIVE_MERCHANT
}

export type MerchantDetailAction = FetchMerchant | FetchMerchantSuccess | FetchMerchantFailure | ResetActiveMerchant

export function fetchMerchant(id:string): FetchMerchant {
  const request = axios({
    headers: [],
    method: 'get',
    url: `${ROOT_URL}/merchants/${id}`
  })
  return {
    payload: request,
    type: constants.FETCH_MERCHANT
  }
}

export function fetchMerchantSuccess(merchant: Merchant): FetchMerchantSuccess {
  return {
    payload: merchant,
    type: constants.FETCH_MERCHANT_SUCCESS
  }
}

export function fetchMerchantFailure(error: any): FetchMerchantFailure {
  return {
      payload: error,
      type: constants.FETCH_MERCHANT_FAILURE
  }
}


export function resetActiveMerchants(): ResetActiveMerchant {
  return {
    type: constants.RESET_ACTIVE_MERCHANT
  }
}