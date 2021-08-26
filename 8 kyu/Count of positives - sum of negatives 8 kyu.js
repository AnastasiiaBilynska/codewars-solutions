// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
  const countPositives = [];
  const countNegatitives = [];
  if (input === null || input.length === 0) {
    return [];
  }
  for (let int of input) {
    int > 0 ? countPositives.push(int) : countNegatitives.push(int);
  }
  return countNegatitives.length !== 0
    ? [countPositives.length, countNegatitives.reduce((cur, acc) => cur + acc)]
    : [countPositives.length, 0];
}


