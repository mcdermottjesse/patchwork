const isEven  = function (num) {
  return num % 2 === 0; // checking to see if defined var is even or odd with modulo operator %. 
}                       // 0 represents what is left over after dividing the number 2 in the declared var

const tenIsEven = isEven(12);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//or can be logged as

console.log(isEven(12));
console.log(isEven(11));

const isEven1 = function(num2) {
  return num2 % 2 === 0
}
const fourteenIsEven = isEven1(14);
const fiveIsEven = isEven1(3);

console.log(fourteenIsEven)
console.log(fiveIsEven)

//or can log as below

console.log(isEven1(40));
console.log(isEven1(73));

let number = 21;


if (number % 2 === 0) { // checking to see if defined var is even or odd with modulo operator %. 
    console.log("even"); // 0 represents what is left over after dividing the number 2 in the declared var
} else {
    console.log("odd");
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filtered = numbers.filter(function evenNumbers(number) { //filter allows us to filter out the elements in an array
return number % 2 === 0 //returns numbers divisible by 2 therefore numbers are even
})
  console.log(filtered) 

  for(let i = 0; i < numbers.length; i++){

    // let j represents the length of a sub-array 
    for(let j=0; j < numbers[i].length; j++){
        if(numbers[i] [j] %2===0)
            numbers[i] [j]="even"; //what is the point of this?? all it does is print
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