import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import donghyunkimLogin from './pages/donghyunkimlogin/Login';
import donghyunkimMain from './pages/donghyunkimmain/Main';
import dongeeseoLogin from './pages/dongeeseologin/Login';
import dongeeseoMain from './pages/dongeeseomain/Main';
import seriparkLogin from '.pages/seriparklogin/Login';
import seriparkMain from './pages/seriparkmain/Main';
import suhhyungKangLogin from './pages/suhhyungKanlogin/Login';
import suhhyungKangMain from './pages/suhhyungKangmain/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path= "/" component={teamindex} />
          <Route exact path="/logindh" component={donghyunkimLogin} />
          <Route exact path="/maindh" component={donghyunkimMain} />
          <Route exact path = "/loginsd" component = {dongeeseoLogin} />
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