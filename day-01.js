function tickets(peopleInLine) {
  let twentyFive = 0;
  let fifty = 0;

  for (let dollarBill of peopleInLine) {
    
    if (dollarBill === 25) {
      twentyFive += 1;
    }

    if (dollarBill === 50) {
      if (twentyFive > 0) {
        twentyFive -= 1;
        fifty += 1;
      }
      return "NO";
    }

    if (dollarBill === 100) {
      if (fifty > 0 && twentyFive > 0) {
        twentyFive -= 1;
        fifty -= 1;
      } else if (fifty === 0 && twentyFive >= 3) {
        fifty -= 3;
      }
      return "NO";
    }
  return "NO";

  
}return "YES";
}

console.log(tickets([25, 25, 50, 50]))
