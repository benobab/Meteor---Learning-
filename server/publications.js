/**
 * Created by Benobab on 16/01/16.
 */
Meteor.publish("allPostHeaders", function(){
    return Posts.find({}, {
        fields: {}
    });
});