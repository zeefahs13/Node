/********************* OBJECT ORIENTED TYPESCRIPT **********************************
 * 
 * Interface in typescript is quite similiar to interfaces in javascript.
 * Typescript compiler doesnt convert interface to javascript, rather uses it for type checking.
 * This is called "DUCK TYPING" or "STRUCTURAL SUBTYPING"
 * 
 ***********************************************************************************/

/*** Typescript Interfaces ********* */


/********** INTERFACE AS FUNCTION TYPE & INTERFACE AS ARRAY */

interface IStringMap{
    [index:string]:string;
};


interface KeyValueProcessor{
    (key:string,value:string):string;
};

let istringmap:IStringMap = {}


function addValue(key:string, value:string):string{
    istringmap[key]=value;
    return value;
}

let kvp:KeyValueProcessor = addValue;
kvp('TS','TypeScript');
kvp('JS','JavaScript');
kvp('107456','Hafeez');

console.log('IStringMap Value is:'+istringmap['TS']+'\n'+'Employee name:'+istringmap['107456']);



/*********** OPTIONAL PROPERTIES IN INTERFACES IN TYPESCRIPT *******************************/

interface Department{

    deptId:number;
    deptName:string;
    deptCode:string;
    deptSlogan?:string;
  // deptString():string;
}

let department:Department ={
    deptId:107456,
    deptName:'EEE',
    deptCode:'EE',
    deptSlogan:'Evergreen Electrical',
}

console.log('Department objects:\n'+department.deptId+'\n'+department.deptCode+'\n'+department.deptName);

/************** INTERFACE READ-ONLY PROPERTIES ***********************
 *  Readonly properties can not be changed once set and are like static variables in Java
 *  Can have only one copy and cannot be modified
 * 
*/


interface Citizen{

    name:string;
    readonly id:number;
}

let citizen:Citizen = {name:'Hafeez', id:107456};


interface Progress{

    progressEmployeeName:string;
    progressEmployeeDepartment:string;
}

interface ProgressGroup extends Progress{
    groupName:string;
    groupFunction:string;
}

class ProgressGroupImpl implements ProgressGroup{

    progressEmployeeName:string;
    progressEmployeeDepartment:string;
    groupFunction:string;
    groupName:string;

    constructor(empName:string,empDept:string,name:string,groupFunc:string){
        this.progressEmployeeDepartment=empDept;
        this.progressEmployeeName=empName;
        this.groupFunction=groupFunc;
        this.groupName=name;


    }



}



    /******************* TYPESCRIPT CLASSES *****************************
     *  A typescript class can have following
     *  Constructor
     *  Properties
     *  Methods
     * 
     *  ## CONSTRUCTOR: A Constructor is a special type of method which will be called when creating an object
     * In TS, constructor method is created by using name 'constructor' only always in a class file.
     * Similiar to java we can have parameterized constructor
     * 
     * 
     * ## INHERITANCE: Similiar to java a class can inherit another class and a class can implement
     * single or multiple interfaces as like in java.
     * 
     * 
     * **##### INTERFACE EXTENDING CLASS: An interface can also extend a class to represent a type.
     * 
     * ## Method Overriding: Similiar to java but will not have any annotations. Here we have to manually call super class method
     * in addition to the custom implementation in child class
     * 
     * 
     * A Child class constructor must call super() constructor as first call to super class constructor.
     * Like in java, here compiler will not call super() cons automatically. We have to manually call them.
     * 
     */

class Building{

    buildingAddress!:string;
    buildingDNO!:string;

    constructor(address:string,dno:string){
        this.buildingAddress = address;
        this.buildingDNO = dno;
    }

}

class Flat extends Building{

    flatNumber:number;
    flatMembers:string;

    constructor(address:string,dno:string,flatno:number,flatMems:string){
        super(address,dno);
        this.flatNumber=flatno;
        this.flatMembers=flatMems;
    }

   // let room:Flat = new Flat('Kondapur,Prashanth Nagar Colony','2-41/22/3/10',104,'Hafeez');

}


/*** METHOD OVERRIDING */

class Vehicle{

    name:string;

     constructor(vehicle:string){
         this.name= vehicle;
     }

     run(speed:number){
         console.log(name+' runs with speed of '+speed);
     }

}

class Car extends Vehicle{

    name:string;

    constructor(carName:string){
        super(carName);
        this.name=carName;
    }


    run(){
        super.run(100);
        console.log('Car is running with speed of '+100);
    }

}


/***************************** ABSTRACT CLASSES IN TYPESCRIPT ******************
 * 
 * Abstract classes concept is similiar to that in java
 * 
 * The class which implements an abstract class must call super() in the constructor.
 */


abstract class IAbstract{

    abstract prop:string;

    abstract meth(test:string):void;

    show():string {
        console.log('Property is '+this.prop);
        return this.prop;
    }
}


class IAbstractImpl extends IAbstract{

    prop!:string;

    constructor(prop:string){
        super();
        this.prop=prop;
    }

    meth(test:string):void{

        console.log('Executing IAbstractImpl.meth '+test);

    }
}

/***********************  ACCESS MODIFIERS IN TYPESCRIPT *****************************************
 * 
 * public, private and protected are the access modifiers available in typescript
 * 
 * 
 * If no modifier is specified for properties, typescript by default assigns it as PUBLIC
 * 
 * protected modifier properties are accessible with its class and inheriting subclasses
 */


/******************** READ ONLY MODE IN INTERFACES ************************
 * 
 * We can assign values to properties of an interface only once by declaring them as ReadOnly<T>
 * 
 */


 interface IEmployee {
    empCode: number;
    empName: string;
}

let emp1: Readonly<IEmployee> = {
    empCode:1,
    empName:"Steve"
}

// From now on you cannot change the values of properties of IEmployee, once object is created

let emp2: Readonly<IEmployee> = {
    empCode:2,
    empName:"Hafeez"
}

/***************************** STATIC KEYWORD IN JAVA ***************************
 * 
 * ES6 includes static members and so does TypeScript
 * Static members of Typescript can be accessed in same way as in java with 
 * ClassName.staticMember;
 * 
 * 
 *  ## Unlike in java, static and non-static fields with the same name can exists without any error.
 * The static field will be accessed using dot notation and the non-static field can be
 *  accessed using an object.
 * 
 * 
 *  &&&&&&&&&&&&&& The class or constructor cannot be static in TypeScript. &&&&&&&&&&&&&&&
 * 
 */


/********************** MODULES IN TYPESCRIPT **********************************************
 * 
 * By default, the variables or methods declared inside a file will have global scope by default.
 * 
 * &&&&&&&&&&&&& MODULES AND NAMESPACES IN TYPESCRIPT ALLOWS US TO PREVENT THE GLOBAL SCOPE &&&&&&&&&&&&&&&
 * 
 * ### EXPORT and IMPORT in Typescript
 * 
 */


//EXPORT OF A CLASS
//Everything under the class IExport will be exported across the project to reuse methods and properties

export class IExport{

    name!:string;
    num!:number;

    constructor(){

    }
    public pageExport(){
        console.log('Exporting page');
    }

    public exportAll(){
        console.log('Exporting complete data');
    }

}

// IMPORTING THE PROJECTS
/***************** IMPORTING THE LIBRARIES ************
 * 
 * ## SINGLE IMPORT
 *  import { Employee } from "./Employee";
 * 
 * ## ENTIRE MODULE
 * 
 * 
 * import * as Emp from "./Employee"
 * 
 * console.log(Emp.age); // 20
 * 
 * let empObj = new Emp.Employee("Bill Gates" , 2);
 * 
 * 
 * ## RENAMING EXPORT FROM A MODULE
 *
 * import { Employee as Associate } from "./Employee" 
 * 
 * Now you can use Associate in place of Employee
 * 
 */


/***************************** TYPESCRIPT MODULE COMPILATION PROCESS AND RULES ***********************
 * 
 * --module <target> <file path>
 * 
 * The following can be used for targets
 * 
 * `    1.None              :
 *      2.CommonJS          : For Server side node.js applications(CommonJS)
 *      3.AMD               : For Client side[web app](require.js)
 *      4.UMD               : For both Client and Server side modules
 *      5.System            : For ES modules
 *      6.ES6, ES2015       : For ES6 or ES5 modules or lower
 * 
 *  ## Module Resolution: https://www.typescriptlang.org/docs/handbook/module-resolution.html
 * 
 * 
 * 
 */


/******************************* NAMESPACES IN TYPESCRIPT ********************************* 
 * Namespaces are used to logically group functionalities that can fit into one bucket.
 * Namespace can have interfaces, class, varaibles, functions
 * 
 *  ## NAMESPACE DEFINITION
 * 
 * namespace StringUtils{
 * 
 * }
 * 
 * Inorder to use namespace utilities, we need to have export keyword for every function or variable inorder to use
 * it in different modules.
 * 
*/


namespace StringUtils{

    export function ToCapital(str: string): string {
        return str.toUpperCase();
    }

    export function SubString(str: string, from: number, length: number = 0): string {
        return str.substr(from, length);
    }


}


/************* USAGE OF NAMESPACES IN OTHER MODULES ********************************
 * 
 * Here the path should have compiled .js file
 * 
 * /// <reference path="StringUtility.js" />
 * 
 * 
 */

/********** COMPILATION OF NAMESPACES IN TYPESCRIPT *********************************
 * 
 * tsc --outFile C:\MyTypeScriptNameSpaces\StringUtility.js C:\MyTypeScriptNameSpaces\StringUtility.ts
 * 
 * 
 *  ## Compile multiple .ts files into single .js file
 * 
 *  tsc --outFile File.js File1.ts File2.ts File3.ts.. FileN.ts
 * 
 *  Here in above example multiple files will get compiled into single File.js
 * 
 */


/********************* NAMESPACE VS MODULE IN TYPESCRIPT *****************************************
 * 
 *  Used for logical grouping of functionalities with local scoping. | Used to organize the code in separate files and not pollute the global scope.
 *  Compile using the --outFile command.                             |  Compile using the --module command
 *  Namespaces cannot declare their dependencies                     | Modules can declare their dependencies
 *  Need to include .js file in html with script tag                 | Must include with Module loader API specified at compilation 
 * 
 */


/******************** GENERICS IN TYPESCRIPT *******************************************************
 * 
 * 
 * 
 */

