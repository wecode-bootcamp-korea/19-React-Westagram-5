import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import teamIndex from './pages/TeamIndex';
import donghyunkimLogin from './pages/donghyunkim/Login/Login';
import donghyunkimMain from './pages/donghyunkim/Main/Main';
import dongeeseoLogin from './pages/dongeeseo/Login/Login';
import dongeeseoMain from './pages/dongeeseo/Main/Main';
import seriparkLogin from './pages/seripark/Login/Login';
import seriparkMain from './pages/seripark/Main/Main';
import suhhyungKangLogin from './pages/suhhyungKang/Login/Login';
import suhhyungKangMain from './pages/suhhyungKang/Main/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path= "/" component={teamIndex} />
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