import { Epic } from "redux-observable"
import { fetchMerchantsAsync } from "../actions/merchants"
import { of } from "rxjs/observable/of"
import { from } from 'rxjs/observable/from'
import { pipe } from 'rxjs'
import { filter, switchMap, map, catchError } from 'rxjs/operators'
import { fetchMerchantAsync } from "../actions/merchantdetails"
import { isActionOf } from 'typesafe-actions'
import { merchantsService } from '../services/merchants'

export const fetchMerchantsFlow: Epic = (action$) => 
    action$.pipe(
        filter(isActionOf(fetchMerchantsAsync.request)),
        switchMap(action => 
            from(merchantsService.fetchMerchants()).pipe(
                map(fetchMerchantsAsync.success),
                catchError(pipe(fetchMerchantsAsync.failure, of))
            )
        )   
    )

export const fetchMerchantFlow: Epic = action$ =>
    action$.pipe(
        filter(isActionOf(fetchMerchantAsync.request)),
        switchMap((action) =>
            from(merchantsService.fetchMerchant(action.payload as string)).pipe(
                map(fetchMerchantAsync.success),
                catchError(pipe(fetchMerchantAsync.failure, of))
            )
        )
    )