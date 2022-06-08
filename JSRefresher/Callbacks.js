
/******
 * Javascript is a synchronous and single threaded language
 */

/**   ASYNCHRONOUS EXECUTION
 * 
 *  Asynchronous means you can execute multiple things at a time and you dont have to finish executing 
 *  current thing in order to move on to next one.
 * 
 */

console.log('Hi World');
setTimeout(()=>{

    console.log('Delayed Execution')
},1000);
console.log('Instant execution');


/******* CALLBACKS ****************************************
 * 
 *   Callback is a function passed as an argument to another function.
 * This technique allows a function to call another function.
 * A callback function can run after another function has finished.
 * 
 * If we are using callback function as an argument, if we have multiple steps which will depend on other functions
 * for next step to continue, it will increase the code complexity and this increased code complexity is called callback hell
 * 
 * Callback hell can be solved using promises.
 * 
 * 
 * 
 */


/****** PROMISES IN JAVASCRIPT *********************************
 * 
 * A promise is a javascript object that links producing and consuming code.
 * 
 *          AVAILABLE STATES IN PROMISES
 *         ------------------------------
 * 
 *     Pending   (undefined)
 *     Fulfilled (resolved value)
 *     Rejected (reason for rejection)
 * 
 *      AVAILABLE PROMISE METHODS
 *     ---------------------------
 *     Promise.all([promises])
 *     Promise.allSetted([promises]) //All promises must either resolve or reject
 *     Promise.any([promises])      //Will display any of the promises that are resolved
 *     Promise.race([promises])  //Will display the result which will come first after execution
 */




function step1(value, isError){
return new Promise((resolve,reject)=>{
    if(!isError){
        resolve(value+10);
    }else{
        reject('Something went wrong. Try again')
    }
});
}

function step2(value, isError){
    return new Promise((resolve,reject)=>{
        if(!isError){
            resolve(value+10);
        }else{
            reject('Something went wrong. Try again')
        }
    });
    }

    function step3(value, isError){
        return new Promise((resolve,reject)=>{
            if(!isError){
                resolve(value+10);
            }else{
                reject('Something went wrong. Try again')
            }
        });
        }

/**** Complete promise code inside the function is called producer code */


/**** Execution of promises in below code snippet is called consumer code */

console.log('**** Start of promise ********')
step1(10,false).
then((res1)=>step2(res1,false)).
then((res2)=>step3(res2,false)).
then((res3)=>console.log(res3)).
catch((error)=>console.log(error));
console.log('**** End of promise ********')


const p1= Promise.resolve('\n Hello Promises!!!');
const p2= 244;
const p3=new Promise((resolve,reject)=>{

        setTimeout(resolve,1,'Executed promise3')

})

Promise.all([p1,p2,p3]).then((values)=> console.log(values));


/*** Promise example in realtime
fetch('https://api.github.com/users').then((response)=>response.json).then((resultant)=> console.log(resultant));
*/

/********* SHORTCOMINGS OF PROMISES *******************
 * 
 * Problem with promises is we have to chain the promises and complexity will increase with the 
 * number of promises in chaining of promises
 * 
 *  Solution is with the usage of async/await
 * 
 */

async function getResult(){
    let res1 = await step1(40,false);
    return res1;

}

console.log('Calling async await function');
getResult().then((response)=>console.log('result of async '+response));


