// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript


const highAndLow = (numbers) =>
  `${Math.max(...numbers.split(" ").map((x) => +x))} ${Math.min(
    ...numbers.split(" ").map((x) => +x)
  )}`;
