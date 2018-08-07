import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import {fetchMerchantRequest} from '../actions/merchantdetails'
import {MerchantDetail} from '../components/MerchantDetails'
import {StoreState} from '../types/index'
import Action from '../actions/action'

export interface MerchantDetailsContainerProps  
{   
    id:string    
}

function mapStateToProps(globalstate: StoreState, ownProps:any) {    
    return{activeMerchant: globalstate.merchantState.activeMerchant, merchantId: ownProps.match.params.id}
  }

const mapDispatchToProps = (dispatch:Dispatch<Action<string>>) => {
    return {        
        fetchMerchant: (id:string) => {
          dispatch(fetchMerchantRequest(id))
        }
      }
}


export default connect(mapStateToProps, mapDispatchToProps)(MerchantDetail)