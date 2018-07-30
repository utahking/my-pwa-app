import * as React from 'react'
import MerchantListContainer from '../containers/MerchantContainer'
import MerchantDetailsContainer from '../containers/MerchantDetailsContainer'

import { Route, Switch } from 'react-router-dom'

// export default class MerchantIndex extends React.Component{
//     render(){
//         return (
//             <div>                
//                 <MerchantListContainer/>
//             </div>
//         )
//     }
// }

const MerchantIndex = () => (
    <Switch>
        <Route exact={true} path='/merchants' component={MerchantListContainer} />
        <Route path='/merchants/:id' component={MerchantDetailsContainer} />
    </Switch>    
)

export default MerchantIndex