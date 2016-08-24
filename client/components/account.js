import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../imports/collections/profiles';
import { Link, browserHistory } from 'react-router';

class Account extends Component {

  handleProfileUpdate() {
    const { name, email, phone } = this.refs;
    Profiles.update(
      { _id: Meteor.userId()},
      {name: name.value, email: email.value, phone: phone.value, avatar: ''}
    );
    browserHistory.push('/');
  }

  render() {
    if (this.props.profile.length) {
      return (
        <div className="panel">
          <div className="panel-body">
            <form onSubmit={this.handleProfileUpdate.bind(this)} className="form-horizontal">
              <legend>Profile Information</legend>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3">Name</label>
                <div className="col-sm-7">
                  <input type="text" name="name" id="name" ref="name" className="form-control" placeholder={this.props.profile[0].name}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="col-sm-3">Email</label>
                <div className="col-sm-7">
                  <input type="email" name="email" id="email" ref="email" className="form-control" placeholder={this.props.profile[0].email}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name" className="col-sm-3">Phone</label>
                <div className="col-sm-7">
                  <input type="text" name="phone" id="phone" ref="phone" className="form-control" placeholder={this.props.profile[0].phone}/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-3">Profile Image</label>
                <div className="col-sm-4">
                  <img src={this.props.avatar} width="100" height="100" className="profile"/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-4">
                  <button type="submit" className="btn btn-success">Update Profile</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default createContainer(() => {
  Meteor.subscribe('all.profiles');
  return {
    profile: Profiles.find({_id: Meteor.userId()}).fetch()
  };
}, Account);
