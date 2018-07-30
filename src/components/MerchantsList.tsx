import * as React from 'react'
import { Link } from 'react-router-dom'
import * as merchantTypes from '../types/index'
import { Merchant } from '../common/Merchant'
import {Table} from 'react-bootstrap'

export interface MerchantsListProps  
{
    merchantsList:merchantTypes.MerchantsList
    fetchPosts:()=>any
}

export class MerchantsList extends React.Component<MerchantsListProps,object> {
    componentWillMount() {
      this.props.fetchPosts()
    }   
  
    renderMerchants(merchants:Merchant[]) {
      return merchants.map((merchant) => {        
        return (
          <li className="list-group-item" key={merchant.id}>
            <Link style={{color:'black'}} to={"/merchants/" + merchant.id}>
              <h3 className="list-group-item-heading">{merchant.firstName}</h3>
            </Link>              
          </li>
        )
      })
    }
  
    render() {
      const { merchants, loading, error } = this.props.merchantsList
  
      if(loading) {
        return <div className="container"><h1>Posts</h1><h3>Loading...</h3></div>      
      } else if(error) {
        return <div className="alert alert-danger">Error: {error.message}</div>
      }
  
      return (
        <div className="container">
        <Table striped={true} bordered={true} condensed={true} hover={true}>        
		<thead>
			<tr>
				<th>#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			
		</tbody>
	</Table>
          <h1>Merchants</h1>
          <ul className="list-group">
            {this.renderMerchants(merchants)}
          </ul>
        </div>
      )
    }
  }