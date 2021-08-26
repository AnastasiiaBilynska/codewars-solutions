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
  