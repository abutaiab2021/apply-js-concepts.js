// variable
var time = "10:20pm";
var bookPrice = 150;
var isWhiteColor = false;

// Array
var partners = ['majid','sajid','najid','','lajid'];
var elementCountIndex = partners.length;
var posidtionElement = partners.indexOf('najid');
partners.push('kajid');
partners.pop();

// conditional
if(bookPrice < 120){
    console.log('I will buy this book');
}
else{
    console.log('Mama! kichu discount den na mama. apni na mama');
}

// loop
var i = 0;
while(i<=14){
    console.log("do something");
    i++;
}

for(var i=0; i<50; i++){
    console.log(i);
}

//function
function isMoonUp(time){
    if(time >= 19 && time < 5){
        return true;
    }
    return false;
}

var moonStatus =  isMoonUp(21);
console.log("chad mama uki diyese ki moja ki moja");

// variable value is changable
let price = 200;
price = 300;
price = 400;

// variable value is not changeable . all time constant

const myName = 'Abu Taiab';
// let myName = 'Abu Taiab';
console.log(myName);
myName = 500;//Akhon ar change kora jabe na karon const diye variable declare kora hoise.