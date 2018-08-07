import Axios from 'axios'
import { ROOT_URL } from '../actions/index'
import {from} from 'rxjs/observable/from'
import { Merchant } from '../common/Merchant'
import { Observable } from 'rxjs'

class MerchantsService {
    public fetchMerchants() : Observable<Merchant[]> {
        const request = Axios.get(`${ROOT_URL}/merchants`).then(response => response.data)
        return from<Merchant[]>(request)    
    }

    public fetchMerchant(id:string):Observable<Merchant> {
        const request = Axios.get(`${ROOT_URL}/merchants/${id}`).then(response => response.data)
        return from(request)
    }
}

const merchantsService = new MerchantsService()
export { merchantsService }