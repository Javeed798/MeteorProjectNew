Template.userProfile.helpers({
    hasFriendRequest : function(){
        console.log(this.user);
        if(Meteor.user() && this.user){
            return Meteor.user().hasRequestFrom(this.user)
        }
    },
    friends : function(){
        return this.user.friends().fetch();
    }
})

Template.userProfile.events({
    'click .add-friend':function(e,tpl){
        var user= tpl.data.user
        console.log('adding a friend',user.username);
        user.requestFriendship();
    },
    'click .cancel-friendship' : function(e,tpl){
        var user = tpl.data.user
        friendRequest = Request.collection.findOne();
            if(friendRequest){
                friendRequest.cancel();
            }
        },
        'click .confirm-friendship' : function(e,tpl){
            var user = tpl.data.user
            friendRequest = Request.collection.findOne()
            if(friendRequest){
                friendRequest.accept();
            }
        }
    })










 // var friendship = userFriends.find({
        //     $or : [
        //         {userId1 : Meteor.userId()},
        //         {userId2 : Meteor.userId()}
        //     ]
        // })
        
        // userFriends.insert({
        //     userId1 : Meteor.userId(),
        //     userId2 : user._id,
        //     createdAt : Date.now()
        // })