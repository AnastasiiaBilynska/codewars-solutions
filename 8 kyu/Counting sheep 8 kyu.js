// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {
    const countArr = [];
    for (let elem of arrayOfSheep) {
      elem ? countArr.push(true) : false;
    }
    return countArr.length;
  }