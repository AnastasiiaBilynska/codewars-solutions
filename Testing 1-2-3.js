// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

const number = function (array) {
    const resultArr = [];
    let i = 0;
    for (let str of array) {
      i++;
      resultArr.push(`${i}: ` + str);
    }
    return resultArr;
  };
