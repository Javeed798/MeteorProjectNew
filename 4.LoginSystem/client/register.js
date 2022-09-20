Template.register.events({
    "submit .form-signup" : function(event){
        var email = trimInput[event.target.email.value];
        var password = trimInput[event.target.password.value];
        var password2 = trimInput[event.target.password2.value];
        var first_name = trimInput[event.target.first_name.value];
        var last_name = trimInput[event.target.last_name.value];


        
		if(isNotEmpty(email) && 
			isNotEmpty(password) && 
			isNotEmpty(first_name) && 
			isNotEmpty(last_name) && 
			isEmail(email) && 
			areValidPasswords(password, password2)){

            Accounts.createUser({
                email : email,
                password : password,
                profile : {
                    first_name : first_name,
                    last_name : last_name
                }  
            }, function(err){
                if(err){
                FlashMessages.sendError("There was an error with the registration")
            }else{
                FlashMessages.sendSuccess("Successfully Created the account");
                Router.go('/dashboard')
            }
            });
            // Prevent submit
        
        }
            return false;
    }
})

// validation rules

// Trim helper

var trimInput = function(val){
    return val.replace(/^\s*|\s*$/g,"")
}

// check the fields are empty or nott
isNotEmpty = function(value){
    if(value && value !== ''){
        return true;
    }else{
        FlashMessages.sendError("Please fill in all fields");
        return false;
    }
}

// validate email address 

isEmail = function(value){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(value)){
        return true;
    }
    FlashMessages.sendError("please use valid email adress")
    return false;
}

isValidPassword = function(value){
    if(password.length < 6){
        FlashMessages.sendError("Password must be atleast 6 chars")
        return false;
    }
    return true;
}

areValidPassword = function(value){
    if(!isValidPassword(password)){
        return false;
    }
    if(password !== confirm){
        FlashMessages.sendError("password didnt matched");
        return false;
    }
}
