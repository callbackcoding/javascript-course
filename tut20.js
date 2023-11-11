// //Promises & Async Await

// function timer() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("STO run");
//     }, 2000);
//   });
// }

// console.log("Before STO");
// timer()
//   .then((a) => {
//     console.log(a);
//     console.log("After STO");
//     console.log("1");
//     console.log("2");
//     console.log("3");
//     console.log("4");
//     console.log("5");
//     console.log("6");
//     console.log("1");
//     console.log("2");
//     console.log("3");
//     console.log("4");
//     console.log("5");
//     console.log("6");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Async await

function timer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("STO run");
    }, 2000);
  });
}

async function main() {
  console.log("Before STO");
  let a = await timer();
  console.log(a);
  console.log("After STO");
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
  console.log("5");
  console.log("6");
  
}
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
main();
