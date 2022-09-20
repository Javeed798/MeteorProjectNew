import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './mytickets.html'
import './layout.html';
import './footer.html'
import './navbar.html'
import './login.html'
import './login'
import './departments.html'
import './departments'
import './mytickets'
import './stafftickets.html'
import './stafftickets'
import './ticket.html'
import './ticket'
import '../lib/router'
import '../lib/collections'


Template.registerHelper('isStaff',function(){
    if(Meteor.user().profile.usertype == 'staff'){
        return true;
    }
})


Template.registerHelper('formatDate',function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
});

Template.registerHelper('capFirst',function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
})

