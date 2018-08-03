import { fetchMerchantsApi, fetchMerchantsSuccess, fetchMerchantsFailure } from '../actions/merchants'
import {ActionTypes} from '../constants/index'
import { StoreState, MerchantsList } from '../types'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import {of} from 'rxjs/observable/of'
import { Epic } from 'redux-observable'
import Action from '../actions/action'
import { MerchantData } from '../types/MerchantData'
import { fetchMerchantApi, FetchMerchantAction, fetchMerchantSuccess, fetchMerchantFailure } from '../actions/merchantdetails'

export const  INITIAL_STATE:StoreState = { 
    merchantState: {
                            activeMerchant:{merchant:null, error:null, loading: false}, 
							deletedMerchant: {merchant: null, error:null, loading: false},
                            merchantsList: {merchants: [], error:null, loading: false},  
                            newMerchant:{merchant:null, error: null, loading: false}, 
    }
}


export const merchantsFetchEpic: Epic<Action> = (action$) => 
    action$.ofType(ActionTypes.FetchMerchants)
        .mergeMap((action: Action) =>
        fetchMerchantsApi()
        .map(payload => fetchMerchantsSuccess(payload))
        .catch(err => of(fetchMerchantsFailure(err)))
)

export const merchantFetchEpic: Epic<Action> = action$ =>
    action$.ofType(ActionTypes.FetchMerchant)
        .mergeMap((action: FetchMerchantAction) => 
        fetchMerchantApi(action.meta.id)
        .map(payload => fetchMerchantSuccess(payload))
        .catch(err => of(fetchMerchantFailure(err)))
)

export function merchantsReducer (state:StoreState=INITIAL_STATE,action:Action):StoreState  {
    let error:any

    switch(action.type){
        case ActionTypes.FetchMerchants:
            return {merchantState:{...state.merchantState, merchantsList:{merchants:[],error:null,loading:true}}}
        case ActionTypes.FetchMerchantsSuccess:
            return {merchantState:{...state.merchantState, merchantsList:new MerchantsList({merchants:action.payload,error:null,loading:false})}}
        case ActionTypes.FetchMerchantsFailure:
        error=action.payload||{message: action.payload}
            return {merchantState:{...state.merchantState, merchantsList:{merchants:[],error,loading:false}}}
        case ActionTypes.ResetMerchants:
            return {merchantState:{...state.merchantState, merchantsList:{merchants:[],error:null,loading:false}}}      
        case ActionTypes.FetchMerchant:
            return {merchantState:{...state.merchantState, activeMerchant:{merchant:null,error:null,loading:true}}}
        case ActionTypes.FetchMerchantSuccess:
            return {merchantState:{...state.merchantState, activeMerchant:new MerchantData({merchant:action.payload, error:null,loading:false})}}
        case ActionTypes.FetchMerchantFailure:
        error=action.payload||{message: action.payload}
            return {merchantState:{...state.merchantState, activeMerchant:{merchant:null,error,loading:false}}}
        case ActionTypes.ResetActiveMerchant:
            return {merchantState:{...state.merchantState, activeMerchant:{merchant:null,error:null,loading:false}}}
    }
    return state
}

export default merchantsReducer
