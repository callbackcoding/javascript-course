//Destructuring

var myObj = {
  name: "Callback Coding",
  age: 10,
  gender: "male",
  koiBh: "xyz",
};

console.log(myObj.age);
const { name, age, gender, koiBh } = myObj;


console.log(
  `Lorem Ipsum is${gender} simply dummy text of the printing ${name} and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of${koiBh} type and scrambled it to make a type specimen book. ${age}  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
);

// Arrow Functions

function add(){
    console.log(1+1)
}
add()

const add2 = () => {
    console.log(1 + 1)
};
add2()