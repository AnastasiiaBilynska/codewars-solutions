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