/****          CLOSURES, IIFE and Spread operator    */

/**** CLOSURE *
 * 
 *  # A closure is a feature in Javascript where an 
 *  inner function has access to outer functions variables and parameters - a scope chain.
 * 
 *  
 *  # The inner function remembers the environment in which it was created.
 * 
 * The closure has 3 scope chains:
 * 
 * @ It has access to its own scope - variables defined between its curly brackets.
 * 
 * @ It has access to outer function's variables
 * 
 * @ It has access to global variables.
 * 
 * */

/*** SCOPE CHAIN ******************************
 * 
 * This set of identifiers that each environment has access to is called "scope"
 * 
 * We can nest scopes into hierarchial chain of environments is known as "scope chain"
 * 
 * 
 */

//Global Execution Context
var xclose=10;

function outerf(){
//Execution Context of Outer function
    var outerx=20;
    function innerf(){
        //Execution Context of Inner function
        var z = 15;
        var op;
        return op;
    }
}

var x1 = 10;
function foo1(){
 var y1=20;
    function bar1(){
        var z1 = 30;
        return x+y+z;
    }
return bar1();
}


//There is a lot of difference in returning function return and function definition.

/****** Function Expression *************
 * 
 * 
 */

let fone = function(){
    return 1;
}

console.log(fone); //This will give you function definition.
console.log(fone()) //This will give you  the value and this is function Function invoking.



/****************** NESTED FUNCTIONS */


function parent(){
    function c1(){
        function c2(){}
    }

}

//CLOSURES

var x2= 100;
function outerx2(){
    var y2 = 50;
    var n=100;
    function innerx2(){
        var z2=10;
        console.log(z2+y2+x2);

    }
}



//Closures can be used for making getters and setters 
//Closures are like java beans/models which serves the purpose of encapsulation


function Bank(){

    var name='Hafeez';

    function getName(){
        return name;
    }

    function setName(setName){

        name=setName;
    }


}



/********** Immediately Invoked Function Expression(IIFE) ***************************
 *  An IIFE(Immediatley Invoked Function Expression) is javascript function that runs as soon as it is defined.
 *  They dont pollute the global object, and they are a simple way to isolate variable declarations
 * 
 */


var username='Hafeez';
(function(username){
    username='Hafeez2';
})(username)

//Here we actually dont need to call the function, they will get executed as soon as they are declared. Instead of calling them specifically
console.log(username);


//NOTICE THINGS HERE VERY CAREFULLY

var user3 ='Hafeez3';

var a=(function(){
    user3='Hafeez4';
})();

// Look at the above syntax very carefully, here we are calling the IIFE is kind pf var a= f() [function call]
// Calling function at declaration level are called IIFEs.



//We can pass parameters to IIFE as mentioned below.

var user31 ='Hafeez3';

var a1=(function(x,y){
    user31='Hafeez4';
    return x+y;
})(x,y);



//SPREAD OPERATOR OR ELLIPSIS

/***** SPREAD OPERATOR ********************************
 * 
 * Spread syntax(...) allows an iterable such as an array expression (OR) 
 * string to be expanded in places where zero or more arguments are expected (OR)
 * An object expression to be expanded in places where zero or more key-value pairs are expected.
 * 
 */

//Array Spreading

let arr1 = [1,2,3];
console.log(...arr1) //Output : 1 2 3
let arr2=[4,5,6];
let arr3 = [...arr1,...arr2];

function sum(x,y,z,n){return x+y+z+n;}

console.log(sum(...arr1)); //This will split the array and pass the arguments accordingly


//String expansion or spreading

var testName='Hafeez';
console.log(...testName); //Output H a f e e z

//Object Spreading

let basicDetails={name:"Hafeez",age:29};
let profDetails={profession:"SE II"};
let resilt={...basicDetails,...profDetails};
let result2 = {...basicDetails,...profDetails,...{location:'Andhra Pradesh'}};
console.log(resilt);
console.log(result2);


let nums=[1,2,3]
function numf(x,y,...rest){
    console.log(x,y,...rest);
}










