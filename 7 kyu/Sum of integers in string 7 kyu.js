// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

function sumOfIntegersInString(string) {
    const regex = /\d+/g;
    const sum = string.match(regex);
    if (sum !== null) {
      return sum.map((a) => +a).reduce((acc, cur) => acc + cur);
    }
    return 0;
  }