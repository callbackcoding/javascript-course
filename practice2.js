//Functions

// 1.

// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
// 2 x 4 = 8
// 2 x 5 = 10

// function table(n) {
//   for (var i = 1; i < 11; i++) {
//     console.log(n + " x " + i + " = " + n * i);
//   }
// }

// var num = +prompt("Enter any number");
// table(num);

// 2.

// 2 ^ 3 = 1 x 2 x 2 x 2 = 8
// 5 ^ 4 = 5 x 5 x 5 x 5

// var base = +prompt("Enter base");
// var pow = +prompt("Enter power");
// var ans = 1;

// function power(a, b) {
//   for (var i = 1; i <= b; i++) {
//     ans = ans * a;
//   }
//   console.log(ans);
// }

// power(base, pow);

// 3.

// 5! = 1 x 5 x 4 x 3 x 2= 120
// 5! = 1 x 2 x 3 x4 x5 = 120
// 4! =  1 x 4 x 3 x 2 = 24
// 3! =  1x 3 x 2  = 6

// var num = +prompt("Enter any number");
// var ans = 1;
// function fact(n) {
//   for (var i = n; i >= 1; i--) {
//     ans = ans * i;
//   }
//   console.log(ans);
// }

// fact(num);

//4.

// function fact(n) {
//   // fact()
//   if (n == 0) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// }

// var num = +prompt("Enter any number");
// console.log(fact(num));

// 5! = 5 x 4! = 120
// 4! = 4 x 3! = 24
// 3! = 3 x 2! = 6
// 2! = 2 x 1! = 2
// 1! = 1 x 0! = 1

// 0! = 1

//5.
// var year = prompt("Enter year");
// checkYear(year);
// function checkYear(y) {
//   if (y % 4 == 0) {
//     console.log("This is a leap year");
//   } else {
//     console.log("This is not a leap year");
//   }
// }

// // 6.

// var str = prompt("Enter any word");
// // civic
// // madam
// // mom

// // make array
// checkPalindrome(str);
// function checkPalindrome(str) {
//   var arr = str.split("");
//   var rev = arr.reverse();
//   var str2 = rev.join("");

//   if (str == str2) {
//     console.log("This is a palindrome");
//   } else {
//     console.log("This is not a palindrome");
//   }
// }
