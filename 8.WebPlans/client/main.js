import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './layout.html';
import '../lib/router'
import '../lib/collections'
import './footer.html'
import './sidebar.html'
import './addplan.html'
import './editplan.html'
import './listplans.html'
import './listsubscribers.html'
import './myplans.html'
import './myplans'
import './plans.html'
import './plans'
import './subscribers'


Template.registerHelper('currentRoute',function (route) {
    return Router.current().route.getName() === route;
})

Template.registerHelper('formatDate',function (date) {
    return new Date(date).toDateString();
})

Template.registerHelper('getEndDate',function (join_date,days) {
    var end_date = join_date.setDate(join_date.getDate() + days);
    return new Date(end_date).toDateString()
})