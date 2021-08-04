function inchToFeet (inches){
    var feet = inches / 12;
    return feet;
}

var dadaInches = 132;
var feet =  inchToFeet(dadaInches);
console.log("Dada Vai feet is :",feet);

var dadiInches = 144;
var feet =  inchToFeet(dadiInches);
console.log("Dadi Vai feet is :",feet);

var naniInches = 156;
var feet =  inchToFeet(naniInches);
console.log("Nani Vai feet is :",feet);

var nanaInches = 168;
var feet =  inchToFeet(nanaInches);
console.log("Nana Vai feet is :",feet);


// mile to kilometter convert by fuction

function mileToKm(miles){
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKm(26.2);
console.log('marathon run kilometer:',marathon);