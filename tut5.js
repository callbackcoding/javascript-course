// 1. If statement
// 2. If else statement
// 3. If else if statement

//if statement

// if (condition) {
//   //body
// }

var flavor = "vanilla";

// if (flavor === "chocolate") {
//   console.log("Bring Icecream!");
// }

// var num = "2";
// if (num == 2) {
//   console.log("Num is 2");
// }

// var num2= +prompt("Enter any number")

// if(num2===3){
//     console.log("Num is 3")
// }

// comparison operator (==,===,<,>,<=,>=)

//if else

// if (flavor === "chocolate") {
//   console.log("Bring Icecream!");
// } else {
//   console.log("Bring Chips!");
// }

// if else if

// if (flavor === "chocolate") {
//   console.log("Bring Icecream!");
// } else if (flavor === "vanilla") {
//   console.log("Bring Icecream!");
// } else {
//   console.log("Bring Chips!");
// }

// nested if

var shopIsOpen = true;
var icecreamPrice = 190;

if (shopIsOpen === true) {
  console.log("outer if executed!!");
  if (icecreamPrice > 200) {
    console.log("Bring Icecream!");
  }
}
