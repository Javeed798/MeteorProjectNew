Messages = new Mongo.Collection('messages')

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.helpers({
  messages : function(){
    return Messages.find();
  }
})

Template.hello.events({
  'submit #chat-form' : function(e){
    e.preventDefault();
    var form = e.target
    var mess = form.message.value;
    // console.log(form.message.value);
    // const val = $('textarea').val();
    // console.log(val);
    if(!mess){
      return alert('write something')
    }
    Messages.insert({
      text : mess,
      createdAt : new Date()
    })
    form.reset();
  }
})
