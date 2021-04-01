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
          <Route exact path="/donghyunkim/login" component={donghyunkimLogin} />
          <Route exact path="/donghyunkim/main" component={donghyunkimMain} />
          <Route exact path="/dongeeseo/login" component={dongeeseoLogin} />
          <Route exact path="/dongeeseo/main" component={dongeeseoMain} />
          <Route exact path="/seripark/login" component={seriparkLogin} />
          <Route exact path="/seripark/main" component={seriparkMain} />
          <Route exact path="/suhhyungKang/login" component={suhhyungKangLogin} />
          <Route exact path="/suhhyungKang/main" component={suhhyungKangMain} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;