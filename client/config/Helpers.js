/**
 * Created by Benobab on 16/01/16.
 */
//Template Globaux
UI.registerHelper('getCompanyName',function(){
    return '<b>Prot-Up</b>';
});

//Helper with arg
UI.registerHelper('addTwo', function(num1,num2){
    return parseInt(num1) + parseInt(num2);
})