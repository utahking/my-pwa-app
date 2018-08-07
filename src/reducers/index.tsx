import {ActionTypes} from '../constants/index'
import { StoreState, MerchantsList } from '../types'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/catch'
import Action from '../actions/action'
import { MerchantData } from '../types/MerchantData'
import { Merchant } from '../common/Merchant'

export const  INITIAL_STATE:StoreState = { 
    merchantState: {
                            activeMerchant:{merchant:null, error:null, loading: false}, 
							deletedMerchant: {merchant: null, error:null, loading: false},
                            merchantsList: {merchants: [], error:null, loading: false},  
                            newMerchant:{merchant:null, error: null, loading: false}, 
    }
}

export function merchantsReducer (state:StoreState=INITIAL_STATE,action:Action<void|string|Merchant[]|Error>):StoreState  {
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
