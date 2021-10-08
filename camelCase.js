// camelCase
// String => String
const camelCase = function(input) {
  let str = '';
  let capitalize = false;
  // loop through string letter by letter
  for (char of input) {
    if (char == ' ') { 
      capitalize = true;
      continue;
    } else {
      if (capitalize) {
        str += char.toUpperCase();
        capitalize = false;
      } else {
        str += char;
      }
    }
  }
  return str;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));