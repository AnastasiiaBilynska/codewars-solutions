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