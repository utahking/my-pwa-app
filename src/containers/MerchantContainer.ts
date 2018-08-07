import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {fetchMerchantsRequest} from '../actions/merchants'
import {MerchantsList} from '../components/MerchantsList'
import {StoreState} from '../types/index'
import { EmptyAction } from 'typesafe-actions/dist/types'
import { ActionTypes } from '../constants'


function mapStateToProps(globalstate: StoreState) {
  return{merchantsList: globalstate.merchantState.merchantsList}
}

const mapDispatchToProps = (dispatch: Dispatch<EmptyAction<ActionTypes.FetchMerchants>>) => {
    return {        
        fetchPosts: () => {
          dispatch(fetchMerchantsRequest())
        }
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(MerchantsList)