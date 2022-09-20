Todos = new Mongo.Collection('collection');

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.methods({
    addTodo: function (text) {
      if (!Meteor.userId()) {
        throw new Meteor.Error("Not-authorized")
      }
      Todos.insert({
        text: text,
        createdAt: new Date(),
        userId: Meteor.userId(),
        username: Meteor.userId().username
      });
    },

    deleteTodo: function (todoId) {
      var todo = Todos.findOne(todoId)
      if (todo.userId != Meteor.userId()) {
        throw new Meteor.Error("Not-Authorized");
      }
      Todos.remove(todoId)
    },
    setChecked: function (todoId, setChecked) {
      var todo = Todos.findOne(todoId)
      if(todo.userId != Meteor.userId()){
        throw new Meteor.Error("Not-Authorized");
      }
      Todos.update(todoId, {
        $set: {
          checked: setChecked
        }
      });
    }
  });
});

 Meteor.publish('todos', function(){
      if (!this.userId) {
        return Todos.find()
      }else{

        return Todos.find({userId : this.userId});
      }
 });