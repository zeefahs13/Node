
/*********************************************************************
 * ######### BINDINGS AND SCOPINGS ##############
 * 
 */

//############# LEXICAL SCOPING ###############
/***
 * Multi layered locality and hiding implementations inside the function can be achieved with
 * nested function
 * 
 */

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(2.5);

/*************************************************
 * 
 * ############ FUNCTIONS AS VALUES ##################
 */

let launchMissiles = function () {
    console.log('----------------------------------------')
    return "Missile launched";


}

console.log(launchMissiles());


/**********************************************
 * 
 * ################ ARROW FUNCTIONS ####################
 */

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;

};

console.log(power(2,4));


/******** CYCLIC FUNCTION CALLS */


// function chicken() {
//     return egg();
//     }
//     function egg() {
//     return chicken();
//     }
//     console.log(chicken() + " came first.");


/*************************************************************88
 * 
 * ######### DEFAULT VALUE TO FUNCTION ARGUMENT #################
 * 
 */

function defaultPower(base,exponent = 2){

    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;

}
console.log('------------------ Default Function Paramter ---------------')
console.log(defaultPower(2));
console.log(defaultPower(2,5));




/******************************************
 * 
 * ################ CLOSURE #################
 * 
 */

 function multiplier(factor) {
    return number => number * factor;
    }
    let twice = multiplier(2);
    console.log('-------Closure --------');
    console.log(twice(5));




/****************************************************************
 * 
 * ####### PURE FUNCTIONS AND SIDEEFFECTS #####################
 * 
 */
    //############## SIDE EFFECT ###########################
    //Side Effect is function which doesnt return anything and is like a pre requisite for some function 
    // to do a particular job
    let setValue=0;
    function sideEffect(){

        setValue='44';

    }

    //############## PURE FUNCTION #########################
    //Pure Function is one which returns value and doesnt depend on any side effect

    function isEven(num){
        return (num%2 == 0);
    }



    