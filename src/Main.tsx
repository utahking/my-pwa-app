import* as  React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import HomePage from './components/Jumbotron'
import MerchantsIndex from './components/MerchantsIndex'

const Main = () => (
    <main>
      <Switch>
        <Route exact={true} path='/' component={Home} />   
        <Route path='/merchants' component={MerchantsIndex} />     
        <Route path="/merchants/new" component={HomePage}/>
      </Switch>
    </main>
  )
  
  export default Main