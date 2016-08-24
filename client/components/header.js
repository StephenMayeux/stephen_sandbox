import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import Accounts from './accounts/accounts';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends Component {
  render() {
    const active = { borderBottomColor: '#3f51b5' };
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <IndexLink to="/" className="navbar-brand">Stephen's Sandbox</IndexLink>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              { this.props.currentUser ?
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="/account" activeStyle={active} >My Profile</Link>
                  </li>
                  <li>
                    <Accounts />
                  </li>
                </ul> :
                <ul className="nav navbar-nav">
                    <li>
                      <Accounts />
                    </li>
                </ul>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, Header);
