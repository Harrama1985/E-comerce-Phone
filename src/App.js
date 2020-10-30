import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductsList from './containers/ProductsList/ProductsList'
import Cart from './containers/Cart/cart'
import Details from './containers/Details/Details';
import Default from './containers/Defaults/Default'
class App extends Component {
  render() { 
    return ( 
      <Fragment>
        <Layout>
          <Switch>
            <Route path='/' exact component={ProductsList}/>
            <Route path='/cart' component={Cart}/>
            <Route path='/detail' component={Details}/>
            <Route component={Default}/>
          </Switch>
        </Layout>
      </Fragment>
  );
  }
}
 
export default App;
