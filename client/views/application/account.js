/**
 * Created by Benobab on 17/01/16.
 */
Accounts.validateNewUser(function(user){
   if(/^[a-zA-Z][a-zA-Z0-9_-]+[a-zA-Z0-9]@([a-zA-Z][a-zA-Z0-9-]+\.)+[a-zA-Z]{2,3}$/
           .test(user.email[0].address)){
       return true;
   }else{
       throw new Meteor.Error(500, "Email Invalide");
   }
});