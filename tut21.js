// Spread Operator

var arr1 = ["c", "d", "e", "f", "g", "h"];
var arr2 = ["a", "b", ...arr1];
console.log(arr1);
console.log(arr2);

// Rest Operator

function values(...a) {
  console.log(a);
}
var myObj = {
  name: "Callback",
};
values("A", "B", "C", "D", myObj);

// Template Literals
var name = "Callback Coding";
var age = 10;
console.log("Hello! My name is", name, "and my age is", age);
console.log(`Hello! My name is ${name} 
and my age is ${age}`);
