// function getFactorial(number){
//     let factorial =  1;
//     let i = 1;
//     while(i <= number){
//         factorial = factorial * i;
//         i++;
//     }
//     return factorial;
// }

// let firstValue = getFactorial(5);
// console.log('First Factorial value is :',firstValue);

// let secondtValue = getFactorial(8);
// console.log('First Factorial value is :',secondtValue);


// reverse way to factorial value calculation
function getFactorial2(number){
    let factorial =  1;
    let i = number;
    while(i >= 1){
        factorial = factorial * i;
        i--;
    }
    return factorial;
}

let firstValue = getFactorial2(5);
console.log('First Factorial value is :',firstValue);

let secondtValue = getFactorial2(7);
console.log('First Factorial value is :',secondtValue);



