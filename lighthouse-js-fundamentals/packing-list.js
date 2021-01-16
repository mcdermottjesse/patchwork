const packingList = ["tent", "bug spray", "sleeping bag"];

console.log("Kitchen stuff to pack:");
packingList.push("energy bars");
packingList[1] = 'bug killer repellent'

for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i]);
};


function changeArr(sleepingBag) {
sleepingBag[2] = 'duvet and yoga mat'
}
changeArr(packingList)
console.log(packingList)

console.log(packingList[3])

console.log("Kitchen stuff to pack:");
packingList[1] = 'bear spray'
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}


