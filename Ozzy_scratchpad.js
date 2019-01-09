/*
 *  Created :Ozzy
 *  Date: 9 Jan 2019

 *  Description: Random scratchpad
 *
 */
/* lets add some values types */
 
 let first_var = "Hello World";;
 console.log(first_var);
 console.log(typeof first_var);

 let num = 30
 console.log(num);
 console.log(typeof num);
 
 let cond = true
 console.log(cond);
 console.log(typeof cond);
 
 let garbage = undefined
 console.log(garbage);
 console.log(typeof garbage);
 
 let nothing  = null
 console.log(nothing);
 console.log(typeof nothing);

 /* Lets put some ref types */
 let makeobj = {
     var_one : 'string 1',
     var_two : 345
 }
 console.log(makeobj);
 console.log(typeof makeobj);

 /* Change object values */
 makeobj.var_one = "string 1 changed"
 console.log(makeobj);
 console.log(typeof makeobj);

 /* There is a bracket notation as well
    Dot is better if we know what we need to access.
    Bracket can be use when accessing somthing at runtime, especially if
    user selects the property to be acessed
 */
let user_select = 'var_one'
 makeobj[user_select] = "string 1 changed again bracket"
 console.log(makeobj);
 console.log(typeof makeobj);

 /* lets mutate object type */
 makeobj.popicoorn = true /*< so can mutate easily on runtime - more like matlab but not like pythion */
 console.log(makeobj);
 console.log(typeof makeobj);


 /* lets try some arrays */
 let arrtry = ['col1', 'col2']
 console.log(arrtry);
 console.log(typeof arrtry);
 arrtry[2] = 'col3'
 console.log(arrtry);
 console.log(typeof arrtry);
 arrtry[5] = 'col6' /* super good so the size is dynamic toolbar, we get empy items */
 console.log(arrtry);
 console.log(typeof arrtry);
 arrtry[25] = 'col26'
 console.log(arrtry);
 console.log(typeof arrtry);

 ///////////////////////////////////////////////
 /* lets try some functions */
 function print_var_and_type (var_one, dont_pass) {
    console.log("Using function to print var and its type");
    console.log(var_one);
    console.log(typeof var_one);

    /* Note: i we dont do not pass argument to varibles, they are defaulted to undefined */
    console.log('Not passed paramenter = ' + dont_pass);

    /* Also we can return vlaues using return, same as python */
    return 20*20 /*< Sqaure of 20 lets say */
 }
 print_var_and_type(arrtry);    
 console.log(print_var_and_type(arrtry));
 /* Also we can have  return to variable */
 let sq2s = print_var_and_type(arrtry);
console.log(sq2s); /*< should print same as above */

