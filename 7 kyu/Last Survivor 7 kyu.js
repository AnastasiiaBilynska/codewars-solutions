
// https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript


function lastSurvivor(letters, coords) {
    const letter = letters.split("");
    for (let coord of coords) {
      letter.splice(coord, 1);
    }
    return letter.join("");
  }
  