const makeCase = function(input, style) {
  if (typeof(style) === 'object') {
    for (const entry of style) {
      input = options(input, entry);
    }
    return input;
  } else if (typeof(style) === 'string') {
    return options(input, style);
  }
};

const options = function(input, style) {
  switch (style) {
    case 'camel':
      return camel(input);
      break;
    case 'pascal':
      return pascal(input);
      break;
    case 'snake':
      return snake(input);
      break;
    case 'kebab':
      return kebab(input);
      break;
    case 'title':
      return title(input);
      break;
    case 'vowel':
      return vowel(input);
      break;
    case 'consonant':
      return consonant(input);
      break;
    case 'upper':
      return upper(input);
      break;
    case 'lower':
      return lower(input);
      break;
  }
};

const camel = function(input) {
  let output = '';
  let capitalize = false;
  for (const char of input) {
    if (char === ' ') {
      capitalize = true;
      continue;
    } else {
      if (capitalize) {
        output += char.toUpperCase();
        capitalize = false;
      } else {
        output += char;
      }
    }
  }
  return output;
};

const pascal = function(input) {
  let output = '';
  let capitalize = false;
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      output += input[i].toUpperCase();
    } else if (input[i] === ' ') {
      capitalize = true;
      continue;
    } else {
      if (capitalize) {
        output += input[i].toUpperCase();
        capitalize = false;
      } else {
        output += input[i];
      }
    }
  }
  return output;
};

const snake = function(input) {
  let output = '';
  for (const char of input) {
    if (char === ' ') {
      output += '_';
    } else {
      output += char;
    }
  }
  return output;
};

const kebab = function(input) {
  let output = '';
  for (const char of input) {
    if (char === ' ') {
      output += '-';
    } else {
      output += char;
    }
  }
  return output;
};

const title = function(input) {
  let output = '';
  let capitalize = false;
  for (let i = 0; i < input.length; i++) {
    if (i === 0) {
      output += input[i].toUpperCase();
    } else if (input[i] === ' ') {
      capitalize = true;
      output += input[i];
    } else {
      if (capitalize) {
        output += input[i].toUpperCase();
        capitalize = false;
      } else {
        output += input[i];
      }
    }
  }
  return output;
};

const vowel = function(input) {
  let output = '';
  for (char of input) {
    if (char === 'a' ||  char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      output += char.toUpperCase();
    } else {
      output += char;
    }
  }
  return output;
};

const consonant = function(input) {
  let output = '';
  for (char of input) {
    if (!(char === 'a' ||  char === 'e' || char === 'i' || char === 'o' || char === 'u')) {
      output += char.toUpperCase();
    } else {
      output += char;
    }
  }
  return output;
};

const upper = function(input) {
  return input.toUpperCase();
}

const lower = function(input) {
  return input.toLowerCase();
}

console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', ['upper', 'snake']));