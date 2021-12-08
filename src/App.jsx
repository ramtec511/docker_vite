import React,{Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Inicio from './components/Inicio';
import Nomatch from './components/Nomatch';
import PrivateRoute from './routes/RoutePrivada';
import {getIsLoggedIn} from './utils'


class App extends React.Component {

  render() {        
    return (
      <Router>
        <Suspense>
        <Switch>          
          <Route path='/' exact={true}  component={Login } />
          <PrivateRoute isAuthenticated={getIsLoggedIn()}><Inicio/> </PrivateRoute>          
          <Route path="*" component={Nomatch } />
        </Switch>
        </Suspense>
      </Router>
    )
  }
}

export default App;