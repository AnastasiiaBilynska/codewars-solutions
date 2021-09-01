// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

const uniqueInOrder = function (iterable) {
  if (typeof iterable === String) {
    const arrFromString = iterable.split("");
    return orderFromArr(arrFromString);
  }
  return orderFromArr(iterable);
};
const orderFromArr = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
    false;
  }
  return result;
};
