import axios, { AxiosPromise } from 'axios'
import * as constants from '../constants'
import { Merchant } from '../common/Merchant'
import { ROOT_URL } from './index'

export interface FetchMerchants {
    type: constants.FETCH_MERCHANTS,
    payload: AxiosPromise<any>
}

export interface FetchMerchantsSuccess {
    type: constants.FETCH_MERCHANTS_SUCCESS,
    payload: Merchant[]
}


export interface FetchMerchantsFailure {
    type: constants.FETCH_MERCHANTS_FAILURE,
    payload: any
}

export interface ResetMerchants {
    type: constants.RESET_MERCHANTS
}

export type MerchantsAction = FetchMerchants | FetchMerchantsSuccess | FetchMerchantsFailure | ResetMerchants

export function fetchMerchants(): FetchMerchants {
    const request = axios({
        headers: [],
        method: 'get',
        url: `${ROOT_URL}/merchants`
    })
    return {
        payload: request,
        type: constants.FETCH_MERCHANTS
    }
}

export function fetchMerchantsSuccess(merchants: Merchant[]): FetchMerchantsSuccess {
    return {
        payload: merchants,
        type: constants.FETCH_MERCHANTS_SUCCESS
    }
}

export function fetchMerchantsFailure(error: any): FetchMerchantsFailure {
    return {
        payload: error,
        type: constants.FETCH_MERCHANTS_FAILURE
    }
}


export function resetMerchants(): ResetMerchants {
    return {
        type: constants.RESET_MERCHANTS
    }
}