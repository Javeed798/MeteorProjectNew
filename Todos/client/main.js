Todos = new Mongo.Collection('collection');
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

if (Meteor.isClient) {
Meteor.subscribe('todos');

 Template.main.helpers({
  collection: function() {
    return Todos.find({},{sort : {createdAt: -1}});
  }
 });

 Template.main.events({ 
  'submit .new-todo': function(event) { 
    var text = event.target.text.value;
   
    Meteor.call('addTodo',text);

    event.target.text.value = "";
    return false;
  },
  
  "click .toggle-check" : function(){
    Meteor.call('setCheked',this._id, !this.checked)
  },

  "click .delete-todo" : function(){
    if(confirm("Are you suree")){

      Meteor.call('deleteTodo',this._id)
    }
  }
  
 });
 
 Accounts.ui.config({
   passwordSignupFields : "USERNAME_ONLY"
  })
}

