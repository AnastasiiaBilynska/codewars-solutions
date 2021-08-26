// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

const switcheroo = (x) =>
  x
    .split("")
    .map((x) => (x === "a" ? "b" : x === "b" ? "a" : x))
    .join("");

