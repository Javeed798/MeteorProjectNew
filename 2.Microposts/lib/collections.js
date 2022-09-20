ProfileImages = new FS.collection("ProfileImages",{
    stores : [new FS.Store.GridFS("ProfileImages")]
});

userImages = new Mongo.Collection("UserImages");