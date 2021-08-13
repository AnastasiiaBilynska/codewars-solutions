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

// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

function sumOfIntegersInString(string) {
  const regex = /\d+/g;
  const sum = string.match(regex);
  if (sum !== null) {
    return sum.map((a) => +a).reduce((acc, cur) => acc + cur);
  }
  return 0;
}


// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript

const isLeapYear = (year) =>
  (year % 100 !== 0 && year % 4 === 0 || year % 400 === 0 ) ? true : false;



// https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

const validPhoneNumber = (phoneNumber) =>
  /^\(\d{3}\) \d{3}-\d{4}$/.test(phoneNumber);

// https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111/train/javascript

function triangle(row) {
  if (row.length === 1) {
    return row;
  }
  const arrFromRow = row.split("");
  let newRow = [];
  for (let i = 0; i < arrFromRow.length - 1; i++) {
    newRow.push(createNewColor(arrFromRow[i], arrFromRow[i + 1]));
  }
  const result = newRow.join("");

  return triangle(result);
}

function createNewColor(first, second) {
  const r = "R";
  const b = "B";
  const g = "G";
  if (first === second) {
    return first;
  } else if ((first === r && second === b) || (first === b && second === r)) {
    return g;
  } else if ((first === b && second === g) || (first === g && second === b)) {
    return r;
  } else {
    return b;
  }
}



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


// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript


const longest = (s1, s2) =>
  Array.from(new Set((s1 + s2).split("").sort())).join("");

// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight) {
  const arrLeft = fight
    .split("")
    .map((x) =>
      x === "w" ? 4 : x === "p" ? 3 : x === "b" ? 2 : x === "s" ? 1 : 0
    )
    .reduce((cur, acc) => cur + acc);

  const arrRight = fight
    .split("")
    .map((x) =>
      x === "m" ? 4 : x === "q" ? 3 : x === "d" ? 2 : x === "z" ? 1 : 0
    )
    .reduce((cur, acc) => cur + acc);

  return arrLeft > arrRight
    ? "Left side wins!"
    : arrLeft < arrRight
    ? "Right side wins!"
    : "Let's fight again!";
}

// https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript


function lastSurvivor(letters, coords) {
  const letter = letters.split("");
  for (let coord of coords) {
    letter.splice(coord, 1);
  }
  return letter.join("");
}

// https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript

const updateLight = (current) =>
  current === "green" ? "yellow" : current === "yellow" ? "red" : "green";



// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

const squareDigits = (num) => parseInt(num.toString().split('').map(x => x*x).join(''));


// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/train/javascript

function isValidIP(str) {
  const newArr = str.split(".");
  const regexp = new RegExp("^([0-9]{1,3}.){3}[0-9]{1,3}$");
  if (newArr.length === 4) {
    if (
      newArr.every((elem) => (elem.length === 1 ? true : !elem.startsWith("0")))
    ) {
      if (newArr.every((elem) => elem >= 0 && elem <= 255)) {
        return regexp.test(str);
      }
      return false;
    }
    return false;
  }
  return false;
}


// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript


function validISBN10(isbn) {
  const regex = new RegExp("^[0-9]{9}[0-9|X]$");
  if (regex.test(isbn)) {
    const arr = isbn.split("").map((x) => x === "X" ? 10 : +x);
    const multipliedArr = [];
    for (let i = 0; i < arr.length; i++) {
      multipliedArr.push(arr[i] * (i + 1));
    }
    const sumMultiplied = multipliedArr.reduce((cur, acc) => cur + acc);
    if (sumMultiplied % 11 === 0) {
      return true;
    }
    return false;
  }
  return false;
}

// https://www.codewars.com/kata/54598d1fcbae2ae05200112c/train/javascript

const all = (arr, fun) => arr.every((elem) => fun(elem));


// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

const noSpace = (x) => x.match(/\w/g).join('');


// https://www.codewars.com/kata/5808c8eff0ed4210de000008/train/javascript

function part(x) {
  const regex = /(Partridge|PearTree|Chat|Dan|Toblerone|Lynn|AlphaPapa|Nomad)/g;
  const str = x.join(" ");
  if (regex.test(str)) {
    const arr = str.match(regex);
    return arr.length !== 0
      ? `Mine's a Pint${"!".repeat(arr.length)}`
      : `Lynn, I've pierced my foot on a spike!!`;
  }
  return `Lynn, I've pierced my foot on a spike!!`;
}

// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

const switcheroo = (x) =>
  x
    .split("")
    .map((x) => (x === "a" ? "b" : x === "b" ? "a" : x))
    .join("");


// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

const bump = (x) =>
  !x.match(/n/g) || x.match(/n/g).length <= 15 ? "Woohoo!" : "Car Dead";


// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

function countSheeps(arrayOfSheep) {
  const countArr = [];
  for (let elem of arrayOfSheep) {
    elem ? countArr.push(true) : false;
  }
  return countArr.length;
}

// 

const nameShuffler = (str) =>
  `${str.split(" ").slice(1)} ${str.split(" ").shift()}`;


// https://www.codewars.com/kata/59e49b2afc3c494d5d00002a/train/javascript

function sortVowels(s){
  const regex = /[aeiou]/i;
  if (typeof s === 'string') {
   const changedStr =  s.split('').map(x => regex.test(x) ? `|${x}\n` : `${x}|\n`).join('');
const result = changedStr.split('');
result.pop();
   return  result.join('');
  }
    return '';
}

//  https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

function generateRange(min, max, step) {
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}


// https://www.codewars.com/kata/580a41b6d6df740d6100030c/train/javascript

function alan(x) {
  const arr = [
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
  ];
  const set = new Set(x);
  const unitedSet = new Set(x);
  for (let station of arr) {
    unitedSet.add(station);
  }
  return set.size === unitedSet.size
    ? "Smell my cheese you mother!"
    : "No, seriously, run. You will miss it.";
}

// https://www.codewars.com/kata/5803c0c6ab6c20a06f000026/train/javascript

function swapVowelCase(str) {
  const regex = /[aeiou]/gi;
  return str.replace(regex, (str) =>
    str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
  );
}

// https://www.codewars.com/kata/580a094553bd9ec5d800007d/train/javascript

const apple = (x) =>
  +x * +x > 1000
    ? `It's hotter than the sun!!`
    : `Help yourself to a honeycomb Yorkie for the glovebox.`;


// https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

const booleanToString = (b) => b.toString();



// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

const removeDuplicateWords = (s) => Array.from(new Set (s.split(' '))).join(' ');


// https://www.codewars.com/kata/59cf805aaeb28438fe00001c/train/javascript

const sum = (digits) =>
  Boolean(digits) || digits == 0
    ? `${(digits + "").split("").join(" + ")} = ${(digits + "")
        .split("")
        .reduce((cur, acc) => +cur + +acc)}`
    : "";


// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

function countPositivesSumNegatives(input) {
  const countPositives = [];
  const countNegatitives = [];
  if (input === null || input.length === 0) {
    return [];
  }
  for (let int of input) {
    int > 0 ? countPositives.push(int) : countNegatitives.push(int);
  }
  return countNegatitives.length !== 0
    ? [countPositives.length, countNegatitives.reduce((cur, acc) => cur + acc)]
    : [countPositives.length, 0];
}


