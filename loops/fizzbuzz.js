/* Fizzbuzz" is a famous interview question used in programming interviews. It goes something like this:
Loop through the numbers 1 to 100
If the number is divisible by 3, print "Fizz"
If the number is divisible by 5, print "Buzz"
If the number is divisible by both 3 and 5, print "FizzBuzz"
If the number is not divisible by 3 or 5, print the number

*/



for (let i = 1; i <= 100; i++) {
if(i % 3 === 0 && i % 5 === 0) {
  console.log("Fizz");
} else if(i % 5 === 0){
  console.log("Buzz");
} else if(i % 3 === 0) {
  console.log("FizzBuzz");
} else {
  console.log(i)
}
}

//below is the same but with a while loop

var x = 1;

// while loop with a stop condition
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    }else if (x % 5 === 0) {
        console.log("James");
    }else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ; 
}

/*{
if(i % 3 === 0){
  console.log("Fizz");
} else if (i % 5 === 0) {
  console.log("Buzz");
} else if (i % 3 === 0 && 5 === 0) {
  console.log("FizzBuzz");
}  else{
  console.log(i);
}
i++;
}
*/