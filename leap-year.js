function isLeapYear(year){
    if((year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)){
        return true;
    }
    else{
        return false;
    }
}

const myYear = 2100;
const isMyLeapYear = isLeapYear(myYear);
console.log("MY year is leap year:",isMyLeapYear);

const yourYear = 2224;
const isYourLeapYear = isLeapYear(yourYear);
console.log('Your year is leap year:',isYourLeapYear);