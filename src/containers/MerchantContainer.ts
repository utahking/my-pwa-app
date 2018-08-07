import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {fetchMerchantsAsync} from '../actions/merchants'
import {MerchantsList} from '../components/MerchantsList'
import {StoreState} from '../types/index'
// import Action from '../actions/action'
import { EmptyAction } from 'typesafe-actions/dist/types'
import { ActionTypes } from '../constants'
// import { RootAction } from '../epics/MerchantEpics'


function mapStateToProps(globalstate: StoreState) {
  return{merchantsList: globalstate.merchantState.merchantsList}
}

const mapDispatchToProps = (dispatch: Dispatch<EmptyAction<ActionTypes.FetchMerchants>>) => {
    return {        
        fetchPosts: () => {
          dispatch(fetchMerchantsAsync.request())
        }
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(MerchantsList)