Template.addplan.events({
    'submit .add-plan-form':function(event) {
        var plan_name = event.target.plan_name.value;
        var plan_label = event.target.plan_label.value;
        var days = event.target.days.value;
        var description = event.target.description.value;
        var is_default = event.target.is_default.value;
        var price = event.target.price.value;

        Plans.insert({
            plan_name: plan_name,
            plan_label: plan_label,
            days: days,
            price: price,
            description: description,
            is_default: is_default
        });
        FlashMessages.sendSuccess("Plan Added")
        Router.go('/admin/plans')
        return false;
    }
})

Template.editplan.helpers({
    'checkValue': function (val1,val2) {
        if(val1 == val2){
            return "selected"
        }
    }
})

Template.editplan.events({
    'submit .edit-plan-form':function(event) {
        var plan_name = event.target.plan_name.value;
        var plan_label = event.target.plan_label.value;
        var days = event.target.days.value;
        var description = event.target.description.value;
        var is_default = event.target.is_default.value;
        var price = event.target.price.value;

        Plans.update({
            _id : this._id
        },{
            $set : {
                plan_name: plan_name,
                plan_label: plan_label,
                days: days,
                price: price,
                description: description,
                is_default: is_default
            }
        })

        FlashMessages.sendSuccess("Plan updated")
        Router.go('/admin/plans')
        return false;
    }
})

Template.listplans.events({
    'click .delete-plan':function () {
        if(confirm("Are you sure u gonna delete this Plan ?")){
            Plans.remove(this._id)
            alert("deleted")
            return false;
        }
        return false;
    }
})

Template.plans.events({
   'click .buy-plan':function (event) {
        var plan_id = event.currentTarget.id;
        var plan_name = event.currentTarget.rel;
        var plan_info = Plans.findOne({_id: plan_id});
        Subscribers.insert({
            plan_name: plan_info.plan_name,
            plan_label: plan_info.plan_label,
            plan_days: plan_info.days,
            plan_price: plan_info.price,
            plan_description: plan_info.description,
            user_id: Meteor.userId(),
            user_email: Meteor.user().emails[0].address,
            join_date: new Date()
        });
        FlashMessages.sendSuccess("Joined Plan")
   }
})

Template.listsubscribers.events({
    'click .cancel-subscription':function () {
        if(confirm("Are you sure")){
            Subscribers.remove(this._id);
            FlashMessages.sendSuccess("plan unsubscribed")
            return false;
        }
        return false
    }
})