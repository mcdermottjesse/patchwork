/*function reverse(string) {
let reversed = "";
  for(let i = string.length -1; i >= 0; i--) {
    reversed += string[i];
    

  }
  return reversed
}



console.log(reverse("hello"));
console.log(reverse("goodbye"));

console.log(reverse("1"))
console.log(reverse("fish"))

console.log(reverse("2"));
console.log(reverse("fish"))
*/


//var words = process.argv.splice(2);

function reverse(string) {
 
  
  let reversed = ''
  
  for (let i = string.length; i >= 0; i--) {
      reversed += string.charAt(i)
      
  }
  return reversed
  }

console.log(reverse("hello goodbye"));



console.log(reverse("1 fish"))


console.log(reverse("2 fish"))