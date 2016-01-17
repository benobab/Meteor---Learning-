/**
 * Created by Benobab on 17/01/16.
 */
Template.register.events({
    "submit form": function(e,template){
        e.preventDefault();

        var username = $('input[id="username"]').val();
        var email = $('input[id="email"]').val();
        var password = $('input[id="password"]').val();
        var password_confirm = $('input[id="password_confirm"]').val();

        var user = {
            username:username,
            email:email,
            password:password
        };



        Accounts.createUser(user,function(err){
            if(err){
                alert(err.reason);
            }else{
                Router.go('home');
            }
        });
    }
});