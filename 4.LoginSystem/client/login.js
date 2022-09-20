Template.login.events({
    "submit .form-sign" : function(event){
        var email = event.target.email.value;
        var password = event.target.password.value;

        Meteor.loginWithPassword(email,password,function(err){
            if(err){
                // i dont want to reset the form if its wrong
                event.target.email.value = email;
                event.target.password.value = password;
                FlashMessages.sendError(err.reason)
            }else{
                FlashMessages.sendSuccess("You are now logged in");
                Router.go('/dashboard')
            }
        })
        return false;
    }
})