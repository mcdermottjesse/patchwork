const isOdd  = function (num) {
  return num % 2 === 1
}

console.log(isOdd(9));
console.log(isOdd(8));

const isOdd1  = function (num) {
  return num % 2 === 1;
}

const sevenIsOdd= isOdd1(7);
const eightIsOdd = isOdd1(8);

console.log(sevenIsOdd);
console.log(eightIsOdd);