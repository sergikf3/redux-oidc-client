import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import { syncHistoryWithStore } from 'react-router-redux';
import HomePage from './components/homePage';
import SsoPage from './components/ssoPage';
import SloPage from './components/sloPage';
import CallbackPage from './components/callback';
import LoginPage from './components/loginPage';
import MainPage from './components/mainPage';
import LegacyPage from './components/legacyPage';

const history = syncHistoryWithStore(browserHistory, store);

export default function Routes(props) {
  return (
    <Router history={history}>
      <Route path="/" component={HomePage}/>
      <Route path="/sso" component={SsoPage} />
      <Route path="/slo" component={SloPage} />
      <Route path="/callback" component={CallbackPage} />
      <Route path="/mainpage" component={MainPage}/>
      <Route path="/legacypage" component={LegacyPage}/>
    </Router>
  );
}
