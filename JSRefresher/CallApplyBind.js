/*** THIS OBJECT
 * 
 * this keyword always refers to current class object
 * this referes to window object in Global Context
 * this refers to an object where we call it.
 * 
 * We will lose the actual context of this based on the place from where we are calling 'this'
 * 
 * call , apply or bind are used to rescue from losing context because of this
 * 
 */


function submit(status){
    console.log('Submitted '+status);
}

const UserComponent = {
    render:function(){
        this.submit();
    },
};

//console.log(UserComponent.submit());

/*** The above console statement will throw an error because here the region of this corresponds to only
 * UserComponent scope and cannot access a function/or variable beyond the region of UserComponent.
 */

/*** Here comes our saviors bind, call, apply */

/**** BIND *****************************
 * bind creates a new function and sets this keyword to the specified object
 * 
 * We can pass arguments to the function to which we are binding by means of second arguments in the bind
 * 
 *
 * For example submit() expects some arguments
 * 
 * submit.bind(UserComponent,'Success!!');
 * 
 * 
 * 
 * 
 * 
*/

let result=submit.bind(UserComponent,'Success!!');
result();

/*** Now after binding the submit function to the component(UserComponent), it will execute submit function */


/****** CALL **************************************
 * 
 * Call will have same sytax as bind with all aspects only thing it seperates is
 *  it will not create any new function instead it will execute immediately by setting this to
 * specified object.
 * 
 */


function Box(height,width){
    this.height=height;
    this.width=width;
}

function Widget(height,width,color){
    Box.call(this,height,width);
    this.color=color;
}

let widget = new Widget(100,200,'Red');
console.log(widget);


function sample(a,b,c){
    console.log('Sample'+a+b+c);
}

sample.call(null,1,2,3);



/********* APPLY ******************************
 * Apply is similiar to call in way that executes by setting this context
 * Only difference between apply and bind is, in case of apply
 * the second argument can be passed as array instead of comma seperated values
 * 
 */

let maximest=[1,2,4,5,7,9,0,100];
console.log(Math.max(maximest)); //This will return nan and will not execute max method
console.log(Math.max.apply(null,maximest));



let maxi=(vals)=>{

    return Math.max.apply(null,vals);
}
console.log('Maxi is'+maxi(maximest));