import axios from 'axios'
import {ActionTypes} from '../constants/index'
import { ROOT_URL } from './index'
import { createAction } from 'typesafe-actions'
import {from} from 'rxjs/observable/from'
import { Merchant } from '../common/Merchant'

export const fetchMerchantsApi  = () => {
    const request = axios({
        headers: [],
        method: 'get',
        url: `${ROOT_URL}/merchants`
    }).then(response => response.data)
    return from(request)
}

export const fetchMerchants = createAction(ActionTypes.FetchMerchants, resolve => {
    return () => resolve({})
})

export const fetchMerchantsSuccess = createAction(ActionTypes.FetchMerchantsSuccess, resolve => {
        return (payload: Merchant[]) => resolve(payload)
})

export const fetchMerchantsFailure = createAction(ActionTypes.FetchMerchantsFailure, resolve => {
    return (payload: Error) => resolve(payload)
  })

export const resetMerchants = createAction(ActionTypes.ResetMerchants)