// https://www.codewars.com/kata/5981a139f5471fd1b2000071/train/javascript

function task(w, n, c) {
    const nameObj = {
      Monday: "James",
      Tuesday: "John",
      Wednesday: "Robert",
      Thursday: "Michael",
      Friday: "William",
    };
    return `It is ${w} today, ${nameObj[w]}, you have to work, you must spray ${n} trees and you need ${c * n} dollars to buy liquid`;
  }