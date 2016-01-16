//Déclaration du layout principal
Router.configure({layoutTemplate : 'mainLayout'});

//Définition d'une route sans paramètre
Router.route('/',{name:'accueil'});

Router.route('/allposts',{ //URL handling the request
    name:"create", //template name
    data:function(){
        var posts = Posts.find();
        return {
            posts:posts
        };
    },
    waitOn: function(){
        return Meteor.subscribe("allPostHeaders"); //while waiting, sending this to the function to avoid error
    }
});



//Définition d'une route avec un paramètre
Router.route('/post/:_id',{
    name:"post",
    data: function(){
        return{
            id: this.params._id
        }
    }
});

Router.route('/posts',{
    name:"posts",
    data:function(){
        return{
            posts:[
                {
                    title: "Premier Poste",
                    hide:true
                },
                {
                    title: "Second Poste",
                    hide:false
                },
                {
                    title: "Troisième Poste",
                    hide:false
                },
                {
                    title: "4 Poste",
                    hide:true
                },
                {
                    title: "5 Poste",
                    hide:false
                },
                {
                    title: "6 Poste",
                    hide:true
                }
            ]
        };
    }

});

//CALCULATRICE
Router.route('/add/:num1/:num2',{
    name:"add",
    template:"calcul",
    data:function(){
        num1 = parseInt(this.params.num1);
        num2 =parseInt(this.params.num2);
        return{
            res: num1 + num2
        };
    }
});
Router.route('/sub/:num1/:num2',{
    name:"sub",
    template:"calcul",
    data:function(){
        num1 = parseInt(this.params.num1);
        num2 =parseInt(this.params.num2);
        return{
            res: num1 - num2
        };
    }
});
Router.route('/mult/:num1/:num2',{
    name:"mult",
    template:"calcul",
    data:function(){
        num1 = parseInt(this.params.num1);
        num2 =parseInt(this.params.num2);
        return{
            res: num1 * num2
        };
    }
});

Router.route('/div/:num1/:num2',{
    name:"div",
    template:"calcul",
    data:function(){
        num1 = parseInt(this.params.num1);
        num2 =parseInt(this.params.num2);
        return{
            res: num1 / num2
        };
    }
});