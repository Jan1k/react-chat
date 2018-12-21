import React from 'react';
import {BrowserRouter as Router,Route, Switch, Redirect} from 'react-router-dom';
import WelcomePage from '../components/WelcomePage';
import ChatPage from '../components/ChatPage';

 const App = () => (
      <Router>
        <Switch>
          <Route exact path="/(welcome)?" component={WelcomePage} />
          <Route path="/chat" component={ChatPage} />
          <Redirect to="/"/>
        </Switch>
      </Router>
  )

export default App;
  