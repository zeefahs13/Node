class Product{

    productName!: string;
    productCode!: string;
    employees: string[] =[];

    constructor(name:string,code:string) {

        this.productCode = code;
        this.productName = name;

    }

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    view(){
       console.log('productName:'+this.productName);
       console.log('productCode:'+this.productCode);
       console.log('employeessList:'+this.employees); 
    }







}


