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
  