// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

const squareDigits = (num) => parseInt(num.toString().split('').map(x => x*x).join(''));
