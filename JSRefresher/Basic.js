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



//SPREAD OPERATOR FOR ARRAYS
const stus = [1,2,3,4,5];
const emps =[...stus];

// If we want to change and assign the user object to different object we 
// have to stringify the user object and then parse it back using below methods

const user = {name:"Hafeez"};
user.age=29;
const admin=JSON.parse(JSON.stringify(user));




/************************* HOISTING IN JAVASCRIPT ***************
 * Hoisting in Javascript: Hoisting is Javascript's default behavior of moving declarations to top
 * 
 * Javascript declarations are hoisted.
 * 
 */

/********** JAVA SCRIPT ENGINE PHASES *****************************
 * 
 * JS Engine has 2 phases while running the code.
 *  i. Memory Allocation
 *  ii. Execution using call stack
 * 
 * ## JavaScript Declarations are hoisted.
 * ## Variables which are declared with var will be stored in Global Window as undefined in memory allocation phase
 * ## Variables which are declared with let and const will be stored in Scripts as undefined in memory allocation phase.
 * 
*/

//### let and const should be defined to use them, whereas var can be accessed as it acts like global variable

console.log(a);
d();
var a='A';
let b='B';
const c='C';

function d(){
    console.log('D');
}
var e=()=>{
    console.log('E');
}


