import { Merchant } from "../common/Merchant"


export class MerchantData {
    merchant: Merchant|null
    error: any
    loading: boolean
    constructor (args?: {}){
        Object.assign(this, args)
    }
}