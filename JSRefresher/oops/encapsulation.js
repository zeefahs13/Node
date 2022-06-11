class Account{

    constructor(accountType, accountId, branch){
        this.accountType=accountType;
        this.accountId=accountId;
        this.branch=branch;
    }

    getAccountType(){
        return this.accountType;
    }

    getAccountId(){
        return this.accountId;
    }

    getBranch(){
        return this.branch;
    }


    /****** We can make a class restrict the methods and properties by declaring them with this
     * this keyword will give access to the methods to the object.
     */



}

class School{

    constructor(name,place,type){
        var schoolname=name;
        var location=place;
        var category=type;
        var pincode;

        this.getName=()=> schoolname;
        this.getLocation=()=>location;
        this.getCategory=()=>category;
        this.getPincode=()=>pincode;

        this.setPincode=(pin)=>{
            pincode=pin;
        }


    }



}

let school = new School('BVPS','Vijayawada','High School');
console.log(school.getCategory());
console.log(school.getLocation());
console.log(school.getName());
school.setPincode('520007');
console.log(school.getPincode());

/*** MAKING METHODS PRIVATE IN CLASS
 * 
 * We can make methods private in class by assigning their result to a var/let/const
 * 
 * We can make them public in class by bounding them to this object
 */

