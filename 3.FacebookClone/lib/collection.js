import SimpleSchema from "simpl-schema";

UserFriends = new Mongo.Collection('userfriends')

var Schemas = {};
Schemas.UserFriends = new SimpleSchema({
    userId1 : {
        type : String,
    },
    userId2 : {
        type : String,
    },
    createdAt : {
        type : Number
    }
})
