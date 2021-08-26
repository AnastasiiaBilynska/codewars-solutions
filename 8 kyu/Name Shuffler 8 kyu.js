// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

const nameShuffler = (str) =>
  `${str.split(" ").slice(1)} ${str.split(" ").shift()}`;
