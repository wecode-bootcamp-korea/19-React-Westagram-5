import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import donghyunkimLogin from './src/pages/donghyunkim/login/Login';
// import donghyunkimMain  from './src/pages/donghyunkim/main/Main';
// import dongeeseoLogin from './src/pages/dongeeseo/login/Login';
// import dongeeseoMain from './src/pages/dongeeseo/main/Main';
// import seriparkLogin from './src/pages/seripark/login/Login';
// import seriparkMain from './src/pages/seripark/main/Main';
import LoginSyeongii from "./pages/suhhyungKang/login/LoginSyeongii";
//import MainSyeongii from './pages/suhhyungKang/main/MainSyeongii';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/donghyunkimLogin" component={donghyunkimLogin} />
          <Route exact path="/donghyunkim/main" component={donghyunkimMain} />
          <Route exact path="/dongeeseo/login" component={dongeeseoLogin} />
          <Route exact path="/dongeeseo/main" component={dongeeseoMain} />
          <Route exact path="/seripark/login" component={seriparkLogin} />
          <Route exact path="/seripark" component={Login} />

          <Route exact path="/seripark/main" component={seriparkMain} /> */}
          <Route exact path="/" component={LoginSyeongii} />
          {/* <Route exact path="/main" component={MainSyeongii} /> */}

          {/* <Route exact path="/suhhyungKang/main" component={Main} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
