
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
  