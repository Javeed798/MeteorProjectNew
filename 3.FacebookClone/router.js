Router.route('/',{
    name : 'home'
})

Router.route('/users/:username',{
    name : 'userProfile',
    waitOn : function(){
        Meteor.subscribe('friendRequest')
    },
    data:function(){
        return {
            user : Meteor.users.findOne({username :this.params.username})
        }
    }
})

Router.configure({
    layoutTemplate :'layout'
});