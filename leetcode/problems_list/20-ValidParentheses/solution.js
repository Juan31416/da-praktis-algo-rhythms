/**
 * @param {string} s
 * @return {boolean}
 */
// Solution 1: Using stack & checking each paretheses character
// Time complexity is O(n) where n is the length of the string
// Space complexity is O(n) where n is the length of the string
var isValid = function (s) {
  let validation = [0, 0, 0];
  let orderValidation = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      validation[0] += 1;
      orderValidation.push(s[i]);
    }

    if (s[i] === "{") {
      validation[1] += 1;
      orderValidation.push(s[i]);
    }

    if (s[i] === "[") {
      validation[2] += 1;
      orderValidation.push(s[i]);
    }

    if (s[i] === ")") {
      console.log(s[i], orderValidation[orderValidation.length - 1]);
      validation[0] -= 1;
      if (orderValidation[orderValidation.length - 1] !== "(") return false;
      orderValidation.pop();
    }

    if (s[i] === "}") {
      console.log(s[i], orderValidation[orderValidation.length - 1]);
      validation[1] -= 1;
      if (orderValidation[orderValidation.length - 1] !== "{") return false;
      orderValidation.pop();
    }

    if (s[i] === "]") {
      console.log(s[i], orderValidation[orderValidation.length - 1]);
      validation[2] -= 1;
      if (orderValidation[orderValidation.length - 1] !== "[") return false;
      orderValidation.pop();
    }
  }

  return validation.every((curr) => curr === 0);
};
