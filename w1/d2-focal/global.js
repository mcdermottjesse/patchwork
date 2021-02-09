/* let myGlobalVar = "global";

const printMyVars = function() {
  let myLocalVar = "local";
  console.log("-- Inside printMyVars --");
  console.log("myLocalVar is:", myLocalVar);
  console.log("myGlobalVar is:", myGlobalVar);
}

printMyVars();

console.log('-- Outside of printMyVars now --');
console.log(myLocalVar); */

let myVar = "global";

const myFunction = function() {
  let myVar = "local";

  console.log("inside myFunction, myVar is:", myVar); 
}

myFunction();

console.log("outside myFunction, myVar is:", myVar);  