import * as React from 'react'
import './App.css'
import Header from './components/Header'

class Home extends React.Component<any, any> {
    public render() {
        return (
          <div>
            <Header type="merchants_index"/>     
            {this.props.children}
          </div>
        )
      }
    }

export default Home