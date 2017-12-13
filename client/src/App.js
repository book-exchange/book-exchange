import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Articles";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import JoinNow from "./pages/JoinNow";
import Login from "./pages/Login";
import LandingPage from "./pages/Landing";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/joinnow" component={JoinNow} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
