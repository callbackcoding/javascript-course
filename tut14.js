// Reading

// 1.
// var myPara = document.getElementById("para");
// console.log(myPara);

// 2.
// var myPara = document.getElementsByClassName("para");

// for (var i = 0; i < myPara.length; i++) {
//   console.log(myPara[i]);
// }

// 3.
// var myPara = document.getElementsByTagName("h1");

// for (var i = 0; i < myPara.length; i++) {
//   console.log(myPara[i]);
// }
// Setting
// var hd = document.getElementById("hd");
// console.log(hd);

// function showHeading() {
// //   var text = "Welcome to Callback Coding";
// //   hd.innerHTML = text;
// //   hd.innerText = text;
// }

var p = document.getElementById("readMore");
var text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci.Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia sapiente sint? Nisi culpa officiis id aliquam, illo architecto laudantium ipsam earum, natus fugit quisquam quibusdam ullam ipsum. Quasi, adipisci.";

function expand() {
  p.innerHTML = text;
}
