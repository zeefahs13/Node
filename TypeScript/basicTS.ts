/*****************************************************************************************
 * 
 *  ############################ TYPESCRIPT LANGUAGE BASICS ###############################
 * 
 ******************************************************************************************/



/****************** TYPES IN TYPESCRIPT **************************/
/************************
    # Number
    # String
    # Boolean
    # Any
    # Void
    # Null


    * let
    * const
    * var(U can use this only once as global variable)

***************************/




//var person: string; //Global usage once set cant change.
//var isTrue: boolean;
//let person1: string; //Complies with only local block scope


let person = "Progress"
let isTrue = true;
let id = 107456;

console.log(person + " with id " + id+" is " + isTrue);



/*
Enums

Similiar to java language, only availanle in JS and transpiles in to equivalent javascript functions

Enums can be uses as preference options or priority

*/

enum Lang {
    English, 
    Telugu, 
    Hindi
}


console.log(Lang.English.toString()+"\n"+Lang.Hindi.toString());


/***** STRINGS ************************
 * 
 * 
 */

let employee:string = 'Hafeez Shaik';

console.log(employee.endsWith('Shaik'));
console.log(employee.replace('Shaik', 'Sheik'));
console.log(employee.toString());
console.log(employee.match(employee.toString()));
console.log(employee.length);
console.log(employee.substring(0,4));
console.log(employee.split(' '));
console.log(employee.bold());
console.log(employee.blink());
console.log(employee.toLowerCase());
console.log(employee.toUpperCase());
console.log(employee.fontcolor('red'));



/************* ARRAYS ********************************************
 * Arrays can contain elements of any data type, numbers, strings, or even objects.
 * Arrays can be declared with type of Objects which it can contain with and without using generics
 * 
 */
//Without using generics
let fruits:string[] =['Apple', 'Papaya','Banana','Grapes'];
console.log(fruits);
//With Generics
let fruitsWithGenerics:Array<string> = ['Apple', 'Papaya','Banana','Grapes'];
console.log(fruitsWithGenerics);

//JS way of having arrays
let fruitsWithJSWay = [1,2,true,false,'Apple','Papaya'];
console.log(fruitsWithJSWay);

//Multi Types Array
let objects: Array<String | number> = ['Apple',1,'banana',2];
console.log(objects);

//for loop
for(var index in fruits)
{ 
    console.log(fruits[index]);  // output: Apple Orange Banana
}


console.log('****** for loop ******');
for(var i = 0; i < fruits.length; i++)
{ 
    console.log(fruits[i]); // output: Apple Orange Banana
}

let slicedFruits = fruits.slice(0,3);
console.log('*** sliced fruits ***'+'\n'+slicedFruits);


/********** TUPLE ***********************************************************
 * Tuple is a array kind of datastructure which can have different datatype elements
 * Tuple is like a map with strict data type check
 * Tuple is like column matrix with each column representing data type defined.
 */

let tuple: [number,string]= [1,'Apple'];

let tupleWithMultipleElements: [number, string] = [1,'Papaya'];

console.log(tuple);
console.log(tupleWithMultipleElements);

/********* UNION *********************************************************
 *  Typescript allows you to use more than one type for a variable
 * 
 */

enum types {
    'number',
    'string'
}



let code: (string | number);
code = "Union";
code = 12435;

function getType(arg1: (string|number)){
    console.log('Evaluating union type ')
    if(typeof(arg1)=='number'){
        console.log(types.number);
    }else if(typeof(arg1)=='string'){
        console.log(types.string);
    }
}

getType(code);


/****************** ANY *********************************************
 * 
 * Any is used when we dont have prior knowledge about the type of variable when we are 
 * obtaining data from third party libraries
 * 
 * 
 */

let anything: any = 'Hello Typescript world!!!!';

anything = false;
anything = 1234556;
anything = null;
anything = undefined;

let anyarray: any[] = [123456, false, 'Hello TS',null,undefined];

console.log(anyarray);

/************* VOID *********************************************
 * Doesnt return anything
 * We cannot assign value to a variable whose type is void.
 * For variable types of void can have only  UNDEFINED.
 * 
 */

function getReturnType(): void{

    console.log('Void return type function')
}

console.log(getReturnType());

let ud: void =undefined;

console.log('ud value is:'+ud);


/****************** NEVER *****************************************************
 * The never type is used when you are sure that something is never going to occur. 
 * For example, you write a function which will not return to its end point or always
 * throws an exception.
 * 
 * We cannot assign any value to variable of type NEVER.
 */

 function throwError(errorMsg: string): never { 
    throw new Error(errorMsg); 
} 

//console.log(throwError('Test error message'));



/******************************* TYPE INFERENCE IN TYPESCRIPT ******************************************
 * Type Inference in TS means, the type script compiler infers the type of variable or array declared 
 * according to the data being assigned to the variable or array. In case of ambiguity, it will infers union types or
 * its super type if all the values falls under that super type.
 */

var str = "Hafeez";
var num = 107456;
var bool = true;
var arr= [1,2,3,'Hafeez', true];

//In last case, the type infered by compiler would be union of (number|string|boolean)

/************************* TYPE ASSERTION *********************************************************
 * 
 * Type assertion in typescript allows you to set the type of variable and tell compiler not
 * to infer the type defined. Its similiar to type casting in java.
 * 
 * 
 */

let typeasser:any =107456;

let employeeId = <number> typeasser;

console.log('Type Assertion of variable:'+typeof(employeeId));

let testing = {};

//BE CAREFUL OF ABOVE BLOCK SCOPE DECLARATION AS TS WOULD AUTOMATICALLY FILL THAT EMPTY GAP.


/***************** TYPE ASSERTION ALONG WITH INTERFACES LIKE MODELS/BEANS/OBJECT *********** */
interface Employee{
    name: string;
    id: number;
}

let employees = <Employee> {};
employees.id = 107456;
employees.name = 'Hafeez';


/***************** TYPE ASSERTION WITH AS KEYWORD ************ */

let typeAssertion: any = 124;
let typeInference = typeAssertion as number;


// While using type assertion use with AS Keyword while using with JSX (React)

/***************** TERNERY OPERATOR ************* */

//Typescript supports ternery operator like java do and is similiar 

let x: number = 4;
let y: number = 7;
x>y?console.log("x>y"):console.log("x<y");


/*********** FOR LOOP ************
 * FOR loop similiar to java syntax
 * FOR-OF loop 
 * FOR-IN loop
 */

//For OF
let arrar= [10,20,30,40,50,60];

console.log('*********************FOR -OF ********************')
for(var val of arrar ){
    console.log(val);
}

console.log('*********************FOR -IN ********************')
for(var ind in arrar ){
    console.log(arrar[ind]);
}



/*************** TYPESCRIPT FUNCTIONS ************************************************* 
 *  # Arrow Functions
 *  # Function Overloading
 *  # Rest Parameters
 * 
*/

//Named and Anonymous functions

/*** Named Functions */

function display(x: number, y: number): number {
    return x + y;
}


/**** Anonymous functions */
let greetings = function (u: number, v: number): number {
    return u + v;
}


/***** Function parameters */

function mandatoryParameters(m: number, n: number) : number {
return m+n;
}

function optionalParameters(o: number, p?: number) : number {

    if(p!=undefined){
        return o+p;
    }else{
        return o+1;
    }
}
console.log('optional parameters by passing 1 arg:'+optionalParameters(4));
console.log('optional parameters:'+optionalParameters(4,5));

// In case if user wants a parameter to be set with default value he has to pass that argument as undefined
function defaultParameters(greet: string = 'Hello', person: string){
    return greet+' '+ person; 
}

console.log('Default Parameters'+defaultParameters(undefined,'Hafeez'));


/*********** ARROW FUNCTIONS **********************************
 * 
 * Arrow functions are also called as Lambda functions
 * 
 */

let parameteredArrowFunction = (a: number, b: number): number => {
    return a + b;
}

let paramLessArrowFunction = () => {
    return 8;
}

console.log('paramLessFunction:' + paramLessArrowFunction());


/***** ARROW FUNCTION USUAGE IN CLASS *****************************
 * 
 */

 class Employees {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log('Employees class members:'+this.empCode +' ' + this.empName)
}
let emp = new Employees(107456, 'Hafeez');
emp.display();



/*********** FUNCTION OVERLOADING *********************************
 * Function overloading: Its similiar concept like method overloading in java but there are some quite differences
 *
 * Function overloading with different number of parameters and types with same name is not supported.  
 */

 function display1(a:string, b:string):void //Compiler Error: Duplicate function implementation
 {
     console.log(a + b);
 }
 
 function display21(a:number): void //Compiler Error: Duplicate function implementation
 {
     console.log(a);
 }


 /************* REST PARAMETERS ****************************************************
  * 
  * Rest parameters are similiar to passing n number of parameters of same type like in java
  * 
  * public static setFile(String FileNames...)
  * 
  * Rest parameters arguments are followed by ellipsis.
  * 
  */

