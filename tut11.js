// 1. Types of Variables (Local and Global)
// 2. Switch Statement

// var msg = "Welcome to Callback Coding"; //global variable

// function add() {
//   console.log("Add function");
//   var a = 5,
//     b = 2;
//   var c = a + b;
//   console.log("The sum is: ", c); //local variable
//   console.log(msg);
// }

// add();

// // console.log("The sum is: ", c);
// // console.log("The sum is: ", b);
// // console.log("The sum is: ", a);

// console.log(msg);

//Switch Statement

var flavor = "abc";


// if (flavor === "chocolate") {
//   console.log("Bring Icecream!");
// } else if (flavor === "vanilla") {
//   console.log("Bring Icecream!");
// } else if (flavor === "mango") {
//   console.log("Bring Icecream!");
// } else {
//   console.log("Bring Chips!");
// }

switch (flavor) {
  case "chocolate":
    console.log("Bring Icecream!");
    break;
  case "vanilla":
    console.log("Bring Icecream!");
    break;
  case "mango":
    console.log("Bring Icecream!");
    break;
  default:
    console.log("Bring Chips!");
}
