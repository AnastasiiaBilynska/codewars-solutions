// https://www.codewars.com/kata/5803c0c6ab6c20a06f000026/train/javascript

function swapVowelCase(str) {
    const regex = /[aeiou]/gi;
    return str.replace(regex, (str) =>
      str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
    );
  }