import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});


Tickets = new Mongo.Collection('tickets');

Departments = new Mongo.Collection('department');

