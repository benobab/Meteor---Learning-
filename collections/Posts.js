/**
 * Created by Benobab on 16/01/16.
 */
//je stock une collection nommée "posts" et je la stock dans "Posts"
//Variable global donc on ne la précède pas de "var" sinon locale au fichier
Posts = new Mongo.Collection("posts");

Posts.allow({
    insert: function(userId, doc){

        if(doc.author !== "Ben"){
            throw new Meteor.Error(403, "Vous n'avez pas l'autorisation d'insérer un nouveau post !");
        }

        return true;
    }
});


