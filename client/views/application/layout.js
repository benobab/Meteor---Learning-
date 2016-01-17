/**
 * Created by Benobab on 17/01/16.
 */
Template.mainLayout.events({
    "click .logout":function(event, template){
        Meteor.logout();
    }
});

Template.login.events({
    "submit form": function (event, template) {
        event.preventDefault();

        var user = $("input[name='username']").val();
        var password = $("input[name='password']").val();

        // Cas 1 : Login en utilisant le nom d'utilisateur
        Meteor.loginWithPassword({
            username: user
        }, password, function (err) {
            if (err) {
                alert(err.reason)
            }
        });
    }
});