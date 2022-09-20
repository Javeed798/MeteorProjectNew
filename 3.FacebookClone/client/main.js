import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import '../router';
import './views/userProfile'
import './views/home'
import '../lib/collection'

Template.home.helpers({
  usernames: function(){
    return Meteor.users.find().fetch().map(function(user){
      return user.username
    })
  },
})


Accounts.ui.config({
passwordSignupFields : "USERNAME_AND_EMAIL"
})