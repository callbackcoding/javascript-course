// // Objects

// var customer = ["Ali", "Jalebi", 1, 100, 20, 80];
// console.log(customer);
// console.log(customer[0]);
// customer[4] = 10;
// console.log(customer);

// // 1. key
// // 2. value

// var customerObj = {
//   name: "Ali",
//   order: "Jalebi",
//   quantity: 1,
//   actualAmount: 100,
//   discount: 20,
//   finalAmount: 80,
// };

// console.log(customerObj);
// console.log(customerObj.name);
// customerObj.discount=10;
// console.log(customerObj);

var customer = [
  ["Ali", "Jalebi", 1, 100, 20, 80],
  ["Sana", "Gulab Jamun", 2, 300, 0, 300],
];
console.log(customer);
console.log(customer[1][1]);

// array of objects
var customerObj = [
  {
    name: "Ali",
    order: "Jalebi",
    quantity: 1,
    actualAmount: 100,
    discount: 20,
    finalAmount: 80,
  },
  {
    name: "Sana",
    order: "Gulab Jamun",
    quantity: 2,
    actualAmount: 300,
    discount: 0,
    finalAmount: 300,
  },
  //array inside object
  {
    name: "Callback C",
    order: ["Gulab Jamun", "Kheer", "custard"],
    quantity: {
      gulabJamun: 3,
      kheer: 1,
      custard: 2,
    },
    actualAmount: 300,
    discount: 0,
    finalAmount: 300,
  },
];

console.log(customerObj);

customerObj[2].order[2] = "Custard";
console.log(customerObj);
