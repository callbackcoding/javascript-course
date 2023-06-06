// Practice Problem

// 1.
// var input = prompt("Enter your value");
// if (input.charCodeAt() >= 48 && input.charCodeAt() <= 57) {
//   alert("This is a number");
// } else if (input.charCodeAt() >= 65 && input.charCodeAt() <= 90) {
//   alert("This is an uppercase letter");
// } else if (input.charCodeAt() >= 97 && input.charCodeAt() <= 122) {
//   alert("This is an lowercase letter");
// }

// 2.
// var cPw = "abc@123";
// var pw = prompt("Enter your password");
// if (pw) {
//   if (cPw === pw) {
//     alert("Hurrah!! password correct");
//   } else {
//     alert("Oops!! Incorrect password");
//   }
// } else {
//   alert("Please Enter your password");
// }

// arrays

// 1.

// var score = [32, 86, 22, 67];
// console.log(score);

// for (i = 0; i < score.length; i++) {
//   for (j = 0; j < score.length - 1; j++) {
//     if (score[j] > score[j + 1]) {
//       temp = score[j];
//       score[j] = score[j + 1];
//       score[j + 1] = temp;
//     }
//   }
// }

// console.log(score);

// 2.

// var color = ["Red", "Pink", "Green"];
// console.log(color);
// var beg = prompt("Color at beg?");
// color.unshift(beg);
// console.log(color);
// var col = prompt("Enter color u want to add");
// var loc = +prompt("Enter the loc ");
// color.splice(loc,0,col)
// console.log(color);

// 3.

// for (var i = 1; i <= 100; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

// 5.

// for (var i = 5; i >= 1; i--) {
//   for (j = 1; j <= i; j++) {
//     document.write("* ");
//   }
//   document.write("<br>");
// }

// for (var i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     document.write(j +" ");
//   }
//   document.write("<br>");
// }

// for (var i = 5; i >= 1; i--) {
//   for (j = 1; j <= i; j++) {
//     document.write(i + " ");
//   }
//   document.write("<br>");
// }

// var n = 1;
// for (var i = 1; i <= 5; i++) {
//   for (j = 1; j <= i; j++) {
//     document.write(n + " ");
//     n++;
//   }
//   document.write("<br>");
// }

// for (var i = 1; i <= 5; i++) {
//   for (var x = 1; x <= 9 - i; x++) {
//     document.write("&nbsp;&nbsp;&nbsp;");
//   }
//   for (j = 1; j <= i * 2 - 1; j++) {
//     document.write("* ");
//   }
//   document.write("<br>");
// }

// 1,1
// 2, 3
// 3, 5 = 3x2-1
// 4, 7 = 4x2-1

// Strings
// 1.
// var str = "Hyderabad";
// console.log(str.replace("Hyder", "Islam"));

// 2

// var message =
//   "Ali and Sami are best friends. They play cricket and football together";
// console.log(message.replace(/and/g, "&"));

// var university = "University of Karachi";
// console.log(university);
// console.log(university.split());

// maths

// var num = 2.148536457;

// console.log(num);
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// var dice = Math.random() * 6 + 1;
// console.log(Math.floor(dice));

// var a = new Date();
// b= a.getMonth();
// var arr = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// console.log(arr[b]);
