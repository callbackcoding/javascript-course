//closures

// function outer() {
//   var a = 2;
//   function inner() {
//     var b = 3;
//     console.log(a + b);
//   }
//   inner();
// }

// outer();

//callback functions
// function a() {
//   return "a";
// }
// var k = 88;
// function b(x, y) {
//   var k = 99;
//   console.log(this.k,x, y());
// }
// b(2, a);

//error handling

function abc() {
  try {
    console.log(a);
  } catch (err) {
    console.log(err.message);
  }
}

abc();
