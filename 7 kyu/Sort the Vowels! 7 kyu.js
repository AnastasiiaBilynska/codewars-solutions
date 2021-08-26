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