import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Profiles } from '../imports/collections/profiles';

import App from './components/app';
import ProfileList from './components/profiles/profile_list';
import Account from './components/account';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={ProfileList}/>
      <Route path='account' component={Account} />
    </Route>
  </Router>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
})
