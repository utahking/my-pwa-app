import { Merchant } from '../common/Merchant'
import { MerchantData } from './MerchantData'

export class MerchantsList {
    merchants: Merchant[]
    error: any
    loading: boolean
    constructor (args?: {}){
        Object.assign(this, args)
    }
}

export interface MerchantState {
    merchantsList: MerchantsList
    newMerchant: MerchantData
    activeMerchant: MerchantData
    deletedMerchant: MerchantData
}

export interface StoreState {
    merchantState: MerchantState
}