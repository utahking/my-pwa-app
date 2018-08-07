import Axios from 'axios'
import {ActionTypes} from '../constants/index'
import { ROOT_URL } from './index'
import { createAction, createAsyncAction } from 'typesafe-actions'
import {from} from 'rxjs/observable/from'
import { Merchant } from '../common/Merchant'
import { Observable } from 'rxjs'

export const fetchMerchantsApi  = ():Observable<Merchant[]> => {
    const request = Axios.get(`${ROOT_URL}/merchants`).then(response => response.data)
    return from<Merchant[]>(request)
}

export const fetchMerchantsAsync = createAsyncAction(ActionTypes.FetchMerchants, ActionTypes.FetchMerchantsSuccess, ActionTypes.FetchMerchantsFailure)<void, Merchant[], Error>()

export const fetchMerchantsRequest = fetchMerchantsAsync.request

export const resetMerchants = createAction(ActionTypes.ResetMerchants)