import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import donghyunkimLogin from './pages/donghyunkim/login/Login';
import donghyunkimMain from './pages/donghyunkim/main/Main';
import dongeeseoLogin from './pages/dongeeseo/login/Login';
import dongeeseoMain from './pages/dongeeseo/main/Main';
import seriparkLogin from './pages/seripark/login/Login';
import seriparkMain from './pages/seripark/main/Main';
import suhhyungKangLogin from './pages/suhhyungKang/login/Login';
import suhhyungKangMain from './pages/suhhyungKang/main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/logindh" component={donghyunkimLogin} />
          <Route exact path="/maindh" component={donghyunkimMain} /> 
          <Route exact path="/loginsd" component={dongeeseoLogin} />
          <Route exact path="/mainsd" component={dongeeseoMain} />
          <Route exact path="/loginsp" component={seriparkLogin} />
          <Route exact path="/mainsp" component={seriparkMain} />
          <Route exact path="/loginsyeongii" component={suhhyungKangLogin} />
          <Route exact path="/mainsyeongii" component={suhhyungKangMain} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;