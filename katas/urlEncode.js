const urlEncode = function (text) {
  text = text.trim();
  let str = '';
  for (let index = 0; index < text.length; index++) {
    if (text[index] === ' ') {
      str += '%20';
    } else {
      str += text[index];
    }
  }
  return str;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));