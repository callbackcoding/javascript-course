// 1. Creating Tags
// -- createElement
// -- createTextNode
// -- appendChild

// 2. Setting Attriubutes
// -- attributes
// -- setAttribute
// -- hasAttribute
// -- getAttribute

//creation of tags
var ul = document.getElementById("ul");
function showList() {
  //   console.log("hello");
  var li = document.createElement("li");
  var liText = document.createTextNode("Callback Coding");
  //   console.log(liText);
  li.appendChild(liText);
  console.log(li);
  ul.appendChild(li);
}

// attributes

ul.setAttribute("class", "myList");
console.log(ul.attributes);
console.log(ul.hasAttribute("id"));
console.log(ul.getAttribute("class"));
