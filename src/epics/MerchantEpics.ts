import { Epic } from "redux-observable"
import Action from "../actions/action"
import { Merchant } from "../common/Merchant"
import { ActionTypes } from "../constants"
import { fetchMerchantsApi, fetchMerchantsAsync } from "../actions/merchants"
import { of } from "rxjs/observable/of"
import { from } from 'rxjs/observable/from'
import { pipe } from 'rxjs'
import { filter, switchMap, map, catchError } from 'rxjs/operators'
import { fetchMerchantApi, fetchMerchantSuccess, fetchMerchantFailure } from "../actions/merchantdetails"
import { isActionOf, ActionType } from 'typesafe-actions'

// export const merchantsFetchEpic: Epic<Action<void|Merchant[]|Error>> = (action$) => 
//     action$.ofType(ActionTypes.FetchMerchants)
//         .mergeMap((action: Action<void>) =>
//         fetchMerchantsApi()
//         .map(payload => fetchMerchantsSuccess(payload))
//         .catch(err => of(fetchMerchantsFailure(err)))
// )

export type RootAction = ActionType<typeof fetchMerchantsAsync>

export const fetchMerchantsFlow : Epic<RootAction> = action$ => 
    action$.pipe(
        filter(isActionOf(fetchMerchantsAsync.request)),
        switchMap(action => 
            from(fetchMerchantsApi()).pipe(
                map(fetchMerchantsAsync.success),
                catchError(pipe(fetchMerchantsAsync.failure, of))
            )
        )   
    )

export const merchantFetchEpic: Epic<Action<string|Merchant|Error>> = action$ =>
    action$.ofType(ActionTypes.FetchMerchant)
        .mergeMap((action: Action<string>) => 
        fetchMerchantApi(action.payload)
        .map(payload => fetchMerchantSuccess(payload))
        .catch(err => of(fetchMerchantFailure(err)))
)