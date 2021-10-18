const urlDecode = function(text) {
  const obj = {};
  let key = '';
  let val = '';
  let isKey = true;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '&') {
      isKey = true;
      obj[key] = val;
      key = '';
      val = '';
      continue;
    } else if (char === '=') {
      isKey = false;
      continue;
    } else if (char === '%' && text[i + 1] === '2' && text[i + 2] === '0') {
      if (isKey) {
        key += ' ';
      } else {
        val += ' ';
      }
      i += 2;
      continue;
    }

    if (isKey) {
      key += char;
    } else {
      val += char;
    }
  }
  
  obj[key] = val;
  return obj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);