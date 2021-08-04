// const num = 5;
// const reminder = num % 2;
// console.log(reminder == 0);


// for even number cheek
function isEven(number){
    if(number%2 ==0){
        return true;
    }
    return false;
}

const myNumber = 1641;
const isMyNumberEven = isEven(myNumber);
// console.log("Wow my Number is even:",isMyNumberEven);

const herNumer = 1892;
const isHerNumberEven = isEven(herNumer);
// console.log("Wow Her Number is even:",isHerNumberEven);

// end

// odd number check by function
function isOdd(number){
    if(number%2 != 0){
        return true;
    }
    return false;
}

const myOddNumber = 1641;
const isMyNumberOdd = isOdd(myOddNumber);
console.log("Wow my Number is Odd:",isMyNumberOdd);

const herOddNumer = 1892;
const isHerNumberOdd = isOdd(herOddNumer);
console.log("Wow Her Number is Odd:",isHerNumberOdd);
