Router.configure({
    layoutTemplate : 'form_layout'
});

Router.map(function(){
    this.route('login',{
        path : '/',
        template : 'login'
    });

    this.route('register');

    this.route('dashboard',{
        layoutTemplate : 'dashboard_layout',
        path :'/dashboard',
        template :'dashboard',

        // whenever there is no user logged in then take 
        // take me to the login page.
        onBeforeAction : function(){
            if(Meteor.user == null){
                Router.go('/login')
            }
            this.next();
        }
    })
})