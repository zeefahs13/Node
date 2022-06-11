//Object Creation ways

//Using Object literal

let Customer = {customerName:'Hafeez',organization:'Apple Foods Inc'};

//Using Object.create
function bank(){

}
// let bank = 
bank.name='SBI';
bank.branch='SPB Hyderabad'
bank.ifsc='SBIN00004342'

//Using functions

function Employee(){
    console.log('Employee');
}
let emp = new Employee();
emp.name='Hafeez'
emp.designation='Software Engineer II';
emp.stream='Java'

console.log(Customer);
console.log(bank);
console.log(emp)

//Using classes

class Order{
    constructor(orderId,orderAmt){
        this.orderId=orderId;
        this.orderAmt=orderAmt;
    }

    getCustomer(){
        return this.customer;
    }

    setCustomer(customer){
        this.customer=customer;
    }
    


}


let order = new Order('124','100');
order.setCustomer('Apple Foods Inc');

console.log(order);



/****  MAKING MEMBERS OF CLASS PRIVATE **************
 * User var keyword to make data members private in javascript
 * 
 * To set or get the data members from outside we will have setters or getters in the class
 * 
 * 
 */

