import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
// import donghyunkimLogin from './src/pages/donghyunkim/login/Login';
// import donghyunkimMain  from './src/pages/donghyunkim/main/Main';
// import dongeeseoLogin from './src/pages/dongeeseo/login/Login';
// import dongeeseoMain from './src/pages/dongeeseo/main/Main';
// import seriparkLogin from './src/pages/seripark/login/Login';
// import seriparkMain from './src/pages/seripark/main/Main';
import LoginSyeongii from "./pages/suhhyungKang/login/LoginSyeongii";
//import MainSyeongii from './pages/suhhyungKang/main/MainSyeongii';
=======
import donghyunkimLogin from './pages/donghyunkim/login/Login';
import donghyunkimMain from './pages/donghyunkim/main/Main';
import dongeeseoLogin from './pages/dongeeseo/login/Login';
import dongeeseoMain from './pages/dongeeseo/main/Main';
import seriparkLogin from './pages/seripark/login/Login';
import seriparkMain from './pages/seripark/main/Main';
import suhhyungKangLogin from './pages/suhhyungKang/login/Login';
import suhhyungKangMain from './pages/suhhyungKang/main/Main';
>>>>>>> master

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
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
=======
          <Route exact path="/logindh" component={donghyunkimLogin} />
          <Route exact path="/maindh" component={donghyunkimMain} /> 
          <Route exact path="/loginsd" component={dongeeseoLogin} />
          <Route exact path="/mainsd" component={dongeeseoMain} />
          <Route exact path="/loginsp" component={seriparkLogin} />
          <Route exact path="/mainsp" component={seriparkMain} />
          <Route exact path="/loginsyeongii" component={suhhyungKangLogin} />
          <Route exact path="/mainsyeongii" component={suhhyungKangMain} />
>>>>>>> master
        </Switch>
      </Router>
    );
  }
}

export default Routes;
