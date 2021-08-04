// // let factorial = 1;
// // for (let i = 1; i<=5; i++){
// //     factorial = factorial * i;
// // }

// // console.log(factorial);

// function getFactorial(number){
//     let factorial = 1;
//     for(let i = 1; i <= number; i++){
//         factorial = factorial * i;
//     }
//     return factorial;
// }

// var myFactorialValue = getFactorial(9);
// console.log('My 9! factorial value is :',myFactorialValue);

// var yourFactorialValue = getFactorial(11);
// console.log('Your 11! factorial value is :',yourFactorialValue);


// reverse way factorial calculation by foor loop

// let factorial = 1;
// for (let i = 1; i<=5; i++){
//     factorial = factorial * i;
// }

// console.log(factorial);

function getFactorial2(number){
    let factorial = 1;
    for(let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

var myFactorialValue = getFactorial2(3);
console.log('My 9! factorial value is :',myFactorialValue);

var yourFactorialValue = getFactorial2(5);
console.log('Your 11! factorial value is :',yourFactorialValue);