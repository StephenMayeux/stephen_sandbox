import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Profiles } from '../../../imports/collections/profiles';
import ProfileDetail from './profile_detail';

class ProfileList extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.props.profiles.map(profile => <ProfileDetail profile={profile} key={profile._id} /> )}
        </div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('all.profiles');
  return {
    profiles: Profiles.find({}).fetch()
  };
}, ProfileList);
