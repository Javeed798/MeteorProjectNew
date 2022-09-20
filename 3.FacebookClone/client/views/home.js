
Template.home.onRendered(function(){
  Meteor.typeahead.inject();
  $('.typeahead').bind('typeahead:select', function(ev,suggestion){
      console.log('Selection:', suggestion.value);
      Router.go('userProfile',{ username : suggestion.value})
    })
})

Template.home.events({
  'typeahead:select .typeahead':function(e){
    console.log("completed",e);
  }
})