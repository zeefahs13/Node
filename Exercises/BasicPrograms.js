/********BAISC EXERCISES */

//FIZZ BUZZ ALGORITHM

function fizzBuzz(testnum) {
    if (testnum % 15 == 0) {
        console.log("FizzBuzz");
    } else if (testnum % 3) {
        console.log("Fizz");
    } else if (testnum % 5) {
        console.log("Buzz");
    } else {
        console.log(testnum);
    }
}

function printTriangle(base) {

    let i = 0;

    let string = '';
    while (i <= base) {
        i++;
        for (j = 1; j <= i; j++) {
            string += '#';
        }
        console.log(string);
    }


}


// CHESS BOARD

function chessboard() {
    console.log('------------------CHESS BOARD--------------------');
    let odd = " # # # #";
    let even = "# # # # "
    for (let i = 1; i <= 8; i++) {
        if (i % 2 == 0) {
            console.log(even);
        } else {
            console.log(odd);
        }
    }
}




fizzBuzz(45);
printTriangle(4);
chessboard();

/***************** FUNCTION EXERCISES ********************/


/****************
 * 
 * Minimum of 2 numbers
 */

function getMin(a, b) {

    if (a < b) { return a; }
    else { return b; }
}




/***********************************************************
 * 
 * ######### COUNT CHARACTERS ##################
 */

function characterCount(string,charac){
    let counter=0;
    let array1 = Array.from(string);
    for(i=0;i<array1.length;i++){

        if(charac == array1[i]){
            counter+=1;
        }
    }
    return counter;

}

console.log(characterCount('test','t'));
