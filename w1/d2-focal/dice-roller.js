


function diceThrow(num) {
  let rolls = []
  for (let i = 0; i < num; i++) {
  
    rolls.push(Math.floor(Math.random() * 6) + 1);
    
  }
  console.log("Rolled " + num + " dice: " + rolls)

}

diceThrow(8);


diceThrow(3);


diceThrow(5);