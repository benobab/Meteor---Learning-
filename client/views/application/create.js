/**
 * Created by Benobab on 16/01/16.
 */
Template.create.events({
    'submit form': function(e){
        e.preventDefault();

        var author = $("input[name='auteur']").val();
        var title = $("input[name='titre']").val();
        var content = $("textarea[name='contenu']").val();

        var post = {
            author: author,
            title: title,
            content: content
        };

        Posts.insert(post);
    }
});