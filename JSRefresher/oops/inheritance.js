class Family{

    
eat(){


}

sleep(){

}

}


class Father{

constructor(){


}

work(){

}


}


class Mother extends Family{

    constructor(){

    }

    cook(){

    }
    
    
}

class Son extends Family{

    constructor(){

    }
    study(){

    }

}

class Daugther extends Family{

    constructor(){

    }

    study(){

    }

}


let fam = new Family();
fam.study();

/*** We cannot achieve multiple inheritance in javascript as this doesnt support Interfacess */

let Father = new Father();
Father.work();


/**** Polymorphism is similiar to Java */

/*** We cannot have same method name with different arguments in java script it will give ambigious results */

