import axios from 'axios'
import {ActionTypes} from '../constants/index'
import { ROOT_URL } from './index'
// import { Observable } from 'rxjs'
import { createAction } from 'typesafe-actions'
import { MerchantState } from '../types'
import {from} from 'rxjs/observable/from'

// export interface FetchMerchants extends Action {
    
// }

// export interface FetchMerchantsSuccess extends Action {
//     type: ActionTypes.FetchMerchantsSuccess
// }


// export interface FetchMerchantsFailure extends Action {
//     type: ActionTypes.FetchMerchantsFailure
// }

// export interface ResetMerchants extends Action {
//     type: ActionTypes.ResetMerchants
// }

// export type MerchantsAction = FetchMerchants | FetchMerchantsSuccess | FetchMerchantsFailure | ResetMerchants


export const fetchMerchantsApi  = () => {
    const request = axios({
        headers: [],
        method: 'get',
        url: `${ROOT_URL}/merchants`
    }).then(response => response.data)
    return from(request)
}

export const fetchMerchants = createAction(ActionTypes.FetchMerchants, resolve => {
    return () => resolve( {
        payload: {}
    })
})

export const fetchMerchantsSuccess = createAction(ActionTypes.FetchMerchantsSuccess, resolve => {
        return (payload: MerchantState) => resolve(payload)
})

export const fetchMerchantsFailure = createAction(ActionTypes.FetchMerchantsFailure, resolve => {
    return (payload: Error) => resolve(payload)
  })

export const resetMerchants = createAction(ActionTypes.ResetMerchants)