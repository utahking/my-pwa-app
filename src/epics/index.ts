import {combineEpics} from 'redux-observable'
import {fetchMerchantsFlow, merchantFetchEpic} from './MerchantEpics'

const epics = combineEpics (merchantFetchEpic, fetchMerchantsFlow)

export default epics