//CONSOLE
console.log ("hello world!");

console.log ('');

//STRINGS
//CAN ADD STRINGS TO EACH OTHER, WILL JUST MAKE A LONGER STRING
console.log("Strings -");
console.log("I didn't want a smoothie!");
console.log(":P" + ":0");

console.log ('');

//NUMBERS
console.log("Numbers -");
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 * 8);
console.log(8 / 8);
console.log(8 % 3); //RETURNS THE REMAINDER OF A LONG-DIVISION PROB

console.log ('');

//STRINGS & NUMBERS
console.log("Strings & Numbers -");
console.log("8 * 8");
console.log("8 * 8" + 8);
console.log("I am " + (8 * 8) + " yrs old");
console.log("8 * 8:", 8 * 8);

console.log ('');

//BOOLEANS
console.log("Booleans -");
console.log(true, false);
console.log("3 > 4:", 3 > 4); //comparisons
console.log("2 <= 2:", 2 <= 2);
console.log("2 > 1 && 2 < 12:", 2 > 1 && 2 < 12); //AND operator: both statements need to be true
console.log("5 > 12 || 6 <=18:", 5 > 12 || 6 <=18); //OR operator: only one has to be true

console.log ('');

//THREE BASIC TYPES
console.log("Basic Types -");
console.log(typeof "hello", typeof (8 - 7), typeof (2 > 1));

console.log ('');

//VARIABLES
//variable cannot start with a number or special character (except _ )
//cannot use a variable before it is defined
//cant use spaces in variable name, use camel-case
console.log("Variables -");
var five = 5;
console.log("five:", five);
var ten = 10;
console.log("ten:", ten);
console.log("five + ten:", five + ten);
console.log("five * ten:", five * ten);

console.log ('');

//ALTERING VARIABLES
console.log("Altering Variables -");
var myStudentDebt = 800;
console.log("myStudentDebt:", myStudentDebt);
myStudentDebt = myStudentDebt - 100; //redefining variable, dont need to use 'var' again
console.log("myStudentDebt:", myStudentDebt);
myStudentDebt -= 100; //shorthand of --> myStudentDebt = myStudentDebt - 100
console.log("myStudentDebt:", myStudentDebt);
myStudentDebt += 100;
console.log("myStudentDebt:", myStudentDebt);
myStudentDebt ++; //++ --> plus 1
console.log("myStudentDebt:", myStudentDebt);
myStudentDebt --; //-- --> minus 1
console.log("myStudentDebt:", myStudentDebt);

console.log ('');

//ARRAYS
//when referencing a number in an array, index starts at 0!!
//can nest arrays inside of arrays
console.log("Arrays -");
var myLuckyNumbers = [3, 7, 8, 14, 21]; //this is an [array]
console.log("myLuckyNumbers:", myLuckyNumbers, typeof myLuckyNumbers);
console.log("myLuckyNumbers[1]:", myLuckyNumbers[1]); //reference a specific number in an array

console.log ('');

//OBJECTS
//in js everything is an objects
//squares=rect, arrays=objects
//array allows you to store index and value relationships, object allows you to create key and value relationships
// var object = { key: value, };
console.log("Objects -");
var me = {
  name: "Savanna",
  age: 20,
  nativeNewYorker: false,
};
console.log("me:", me);
console.log("me['name']:", me['name']); //bracket notation
console.log("me.name:", me.name); //dot notation

console.log (''); // log() is a function

//FUNCTIONS
console.log("Functions -");
var sayHi = function() {
  console.log("hi!");
  console.log("hello!");
}
console.log("sayHi():");
sayHi(); //whenever we run this, will run code inside of var function defined above

//argument name: message,
//supplying arugment to function
//argument is just arbitrary name, not actual argument
var saySomeMessage = function(message) {
  console.log(message);
}
console.log("saySomeMessage('hello'):");
saySomeMessage('hello');
saySomeMessage('goodbye');

var addNumbers = function(num1, num2) {
  return num1 + num2 //returns value when you run function
}
console.log("addNumbers(1,2):", addNumbers(1,2));



//FUNCTIONS AGAIN!! (going over hw) 3.15
//argument goes inside ()
var squared = function (number) {
  return number * number
}
//----or-----
function squared (number) {
  return number * number
}

//second part of HW

var me = {
  name: "Savanna",
  age: 20,
  nativeNewYorker: false,
};

var describeMe = function (me) {
  return "Hi I am " + me.name + " and I am " + me.age + " and if you asked me if I was a natvie New Yorker I would say " + me.nativeNewYorker
}

var Rachel = {
  name: "rachel",
  age: 76,
  nativeNewYorker: false,
};
//then run describeMe(Rachel) and it would replace w her info



console.log('');



//CONDITIONAL STATEMENTS 3.15
//will run chunk of code based on a condition
//compartive statement goes inside ()
console.log('Conditional Statements–');

if (me.age > 21) {
  console.log('party time')
}
else if (me.age < 5){
  console.log('why are you here')
}
else {
  console.log('not quit yet')
}


console.log('');


//LOOP
// the i is like a starting point
console.log('Loops–');

var hamburgers = 0;
for (var i = 0; hamburgers < 10; i++) {
  console.log(hamburgers + ' hamburger(s)');
  hamburgers++;
}

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log('how many licks does it take to get to the center of a tootsie pop?')

for (var licks = 1; licks <= 4; licks++) {
  if (licks==4) {
    console.log('CRUNCH!');
  }
  else {
  console.log(licks);
  }
}
