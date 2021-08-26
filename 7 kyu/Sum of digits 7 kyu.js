// https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript

const sum = (digits) =>
  Boolean(digits) || digits == 0
    ? `${(digits + "").split("").join(" + ")} = ${(digits + "")
        .split("")
        .reduce((cur, acc) => +cur + +acc)}`
    : "";
