import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import { Profiles } from '../imports/collections/profiles';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // seed db
  const numRecords = Profiles.find({}).count();
  if (!numRecords) {
    _.times(25, () => {
      const { name, email, phone } = helpers.createCard();
      Profiles.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }  
});
