const isOdd  = function (num) {
  return num % 2 === 1 // return statement will return a true or false statement. Based on the declared var. 
}                       // 1 will check to see if there is 1 left over after dividing the number 2 in the declared var

console.log(isOdd(13)); //true
console.log(isOdd(8)); //false

//or can log it as below

const sevenIsOdd = isOdd(8);
const eightIsOdd = isOdd(7);

console.log(sevenIsOdd);
console.log(eightIsOdd);

let number = 20;


if (number % 2 === 1) { // checking to see if defined var is even or odd with modulo operator %. 
    console.log("odd"); // 0 represents what is left over after dividing the number 2 in the declared var
} else {
    console.log("even");
}

for(let i = 0; i < numbers.length; i++){

  // let j represents the length of a sub-array 
  for(let j=0; j < numbers[i].length; j++){
      if(numbers[i] [j] %2===0)
          numbers[i] [j]="even"; //what is the point of this??
      else
          numbers[i] [j]="odd";
  }
}

 /*what is the point of this?? all it does is print
  [
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
  ]
*/

// Print the final array

console.log(numbers); 