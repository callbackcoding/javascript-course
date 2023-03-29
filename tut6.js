// ARRAY

// // push (add element in the end)
// // pop (remove one element from the end)

// // shift (remove one element from the start)
// // unshift(add one element in the start)

// // splice (add and remove from anywhere)
// // slice (copy element from one array to another)

var country1 = "Pakistan";
var country2 = "India";
var country3 = "Afg";
var country4 = "China";

var countries = ["Pakistan", "India", "Afg", "China"];

//total elements -- 4
// index: 0-3

// console.log(countries);
// console.log(countries[1]);
countries[2] = "Afghanistan";

//push and pop
// countries[4] = "America";
// countries.push("America");
// countries.push("America","Srilanka");
// console.log(countries);

countries.pop();
// console.log(countries);


//shift and unshift

countries.shift();
console.log(countries);

countries.unshift("Pakistan","China")
console.log(countries);

//slice and splice

// countries.splice(1,1) //only remove
// console.log(countries);

// countries.splice(3,0,"Srilanka","Bangladesh") //insert only
// console.log(countries);

// countries.splice(1,1,"Bangladesh") //insert and delete both
// console.log(countries);

// var newCountries = countries.slice(1,3)
// console.log(newCountries)



