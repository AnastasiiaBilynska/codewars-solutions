// https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript

function tickets(peopleInLine) {
  let count25 = 0;
  let count50 = 0;
  for (let x of peopleInLine) {
    if (x === 25) {
      count25++;
    } else if (x === 50 && count25 >= 1) {
      count50++;
      count25--;
    } else if (x === 100 && count50 >= 1 && count25 >= 1) {
      count50--;
      count25--;
    } else if (x === 100 && count50 === 0 && count25 >= 3) {
      count25 -= 3;
    } else return "NO";
  }
  return "YES";
}
