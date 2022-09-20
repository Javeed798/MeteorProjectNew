Template.profile.events({
    "submit .edit-profile" : function(event){
        var file = $("#profileImage").get(0).files[0];
        if(file){
            fsFile = new FS.File(file);
            ProfileImages.insert(fsFile, function(err,result)){
                if(err){
                    throw new Meteor.Error(err)
                }else{
                    userImages.insert({
                        
                    })
                }
            }
        }
        return false;
    }
})