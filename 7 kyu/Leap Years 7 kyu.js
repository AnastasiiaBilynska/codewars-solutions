
// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript

const isLeapYear = (year) =>
  (year % 100 !== 0 && year % 4 === 0 || year % 400 === 0 ) ? true : false;
