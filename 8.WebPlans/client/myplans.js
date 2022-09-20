Template.myplans.helpers({
    'userplans': function () {
        return Subscribers.find({
            user_id : Meteor.userId()
        })
    }
})

Template.myplans.events({
    'click .cancel-plan':function () {
        if(confirm('Are you sure to get cancelled??')){
            Subscribers.remove(this._id);
            FlashMessages.sendSuccess("Subscription cancelled");
        }
    }
})