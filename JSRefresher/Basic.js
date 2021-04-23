/****   BASIC JS  *** */

//CORE LANGUAGE FEATURES
//VARIABLES AND FUNCTIONS
/*************************
 * 
 * ##############  var ############################
 * Any statement which starts with var is a global variable and can declare any number of times and its 
 * value changes as the program moves forward
 * 
 * You can even redeclare var with same variable name as its used previously
 * 
 * Var will have either function scope or global scope
 * 
 * Block level scope doesnt hold good
 * 
 * ############### let ############################
 * 
 * You can declare the variable only once and scope is limited to block in which its declared or initialised
 * Its very similiar to a local variable in java/other programming languages
 * 
 * ############# const ###########################
 * 
 * As the name itself suggests that its a constant and value cannot be altered
 *
 * 
 */


/**************************
 * undefined in javascript is similiar to null in java 
 * A function without any return statement
 * 
 */


//################### VAR SCOPE TEST ###################

var name1 = 'Test';
var age=44;
var isFalse=false;
var percent=33.5;

function vartest(){
name1='Test2';
console.log('Changed name to Test2'+name1);
}

//################# LET SCOPE TEST ##################

/**********   LET  */
let name2='let0'
function lettest(){
    let name2='let1';
    console.log('During func call'+name2);
}

vartest();
console.log('Printing value of var'+name1);//Test2
console.log('Before func call'+name2);
lettest();
console.log('After func call'+name2);
