/*************** HIGHER ORDER JAVASCRIPT FUNCTIONS ******************
 * 
 * 
 */

/***
 *              FUNCTIONAL PROGRAMMING
 * 

Functional programming mean we can pass functions as parameters 
and return functions as return type of functions.
Examples: JavaScript, Haskell,Clojure, Scala and Erlang


                FIRST CLASS FUNCTIONS

First class functions are built with intention of being passed around to other functions and will do specific thing only.
Functions are objects in any functional programming language.


                <code>
let increment = num=>num+1; //Here num+1 will be automatically returned.

function numbers(fn,x){
return fn(x);
}

let result= numbers(increment,10);

 */


//FIRST CLASS FUNCTIONS

let increment = num=>num+1; //Here num+1 will be automatically returned.

//The below is not a first class functions
function numbers(fn,x){
return fn(x);
}

let result= numbers(increment,10);
console.log('*********************** FIRST CLASS FUNCTIONS****************** \n '+result);


//PASSING FIRST CLASS FUNCTION TO HIGHER ORDER FUNCTIONS
let rational=[1,2,3,4,5,6,7];
let numres=rational.map(increment);
console.log(numres);



//PROOF FOR FUNCTIONS ARE OBJECTS

function sayHello(){
    console.log('Hello');
}

sayHello.hobby='Programmer';
console.log(sayHello.hobby);


/**** HIGHER ORDER FUNCTIONS
 * 
    Higher order functions are functions that receives first class functions as an argument or returns the first class
    functions as output

    Examples: map, reduce, filter,find and forEach etc..


 */

/****** map()
 *   map(): map method creates the new array by calling the callback function provided as an argument on every element
 *   in the input array.
 *   # It will take every returned value from the callback function and creates a new array using those values.
 *   # The callback function provided to map method accepts 3 arguments element, index, array.
 */

let arr1= [1,2,3,4,5,6,7,8,9];
let res1 = arr1.map((element,index,array)=>element*2);
console.log(res1);


/*** forEach()
 * 
 * Here forEach() is similiar to java
 * 
 */


let arr2 = [1,2,3,4,5,6,7,8,9,200,123,143,128];
const evens=[];

arr2.forEach(x=>{
    if(x%2==0){ evens.push(x);}
    
});
console.log(evens);

/**** map() vs forEach()
 * map() returns an array where as forEach doesnt return anything but performs operations
 */

/***** filter()
 *  Filter method creates new array with all the elements that pass the provided test by the callback function
 *  Callback function passed to filter accepts 3 arguments element,index, array;
 * 
 * 
 */

const employees=[{name:'Hafeez1',profession:'Backend Developer'},{name:'Hafeez2',profession:'Frontend Developer'},{name:'Hafeez3',profession:'Full Developer'},{name:'Hafeez4',profession:'Senior Developer'}]

let partialdevs=employees.filter((x)=>(x.profession=='Backend Developer' || x.profession=='Frontend Developer'));
console.log(partialdevs);

/***** find() and findIndex()
 *  find() returns the first matching occurent element of an array where predicate is true (or)
 *  if no matching element is found it will return undefined.
 * 
 * findIndex() returns the index of matching occrent element of an array where predicate is true (or)
 *  if no matching element is found it will return -1.
 * 
 */



/***** filter() vs find() **************
 * 
 *  filter will give you the matching items in the array where find() will give you the first matched element and doesnt iterate over the array
 * findIndex() will return you the index matching that element in the array.
 * 
 * 
 * 
 */


let res2 = arr2.find((x)=> (x==128));
console.log('find() element '+res2)
let res21 = arr2.findIndex((x)=> (x==128));
console.log('findIndex() element '+res21)


/**** reduce() *******************************
 * 
 *  reduce() method executes callback function on each and every member of calling array
 *  which results in single output value.
 * 
 *  It expects 2 args reducer function, initial value(optional)
 *   reducer function accepts 4 args - accumulator, currentValue, currentIndex, srcArray
 * 
 *   (initial value !=null) ? accumulator=initial value: accumulator= first value in array & currentIndex = second element.
 * 
 * 
 */

