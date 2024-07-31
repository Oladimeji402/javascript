// TEST ONE
let mark = 78 / ( 1.69 * 1.69);
let john = 92 / (1.95 * 1.95);
console.log( "mark BMI is " + mark.toFixed(2));
console.log( "john BMI is " + john.toFixed(2));
let markHigherBMI = mark > john ;
console.log("Is mark BMI higher than john BMI " + markHigherBMI);

////TEST TWO ////

let mark2 = 95 / ( 1.88 * 1.88);
let john2 = 85 / (1.76 * 1.76);
console.log( "mark2 BMI is " + mark2.toFixed(2));
console.log( "john2 BMI is " + john2.toFixed(2));
let markHigherBMI2 = mark2 > john2;
console.log( "Is mark2 BMI higher than john2 BMI " + markHigherBMI2); 

let x = 3;
let y = 8;
let z = (x == '3' || x === y) && !(y != 8 && x <= y );
console.log(z);

