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