import {combineEpics} from 'redux-observable'
import {fetchMerchantsFlow, fetchMerchantFlow} from './MerchantEpics'

const epics = combineEpics (fetchMerchantFlow, fetchMerchantsFlow)

export default epics