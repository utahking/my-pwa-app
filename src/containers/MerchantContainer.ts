import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {fetchMerchants} from '../actions/merchants'
import {MerchantsList} from '../components/MerchantsList'
import {StoreState} from '../types/index'
import Action from '../actions/action'


function mapStateToProps(globalstate: StoreState) {
  return{merchantsList: globalstate.merchantState.merchantsList}
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {        
        fetchPosts: () => {
          dispatch(fetchMerchants())
        }
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(MerchantsList)