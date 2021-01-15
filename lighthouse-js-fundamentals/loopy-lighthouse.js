let i = 100
while (i <= 200) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('Loopy Lighhouse');
  } else if (i % 4 === 0) {
    console.log('Lighthouse');
  } else if (i % 3 === 0) {
       console.log('Loopy');
      } else {
        console.log(i);
      }
      i++
}
