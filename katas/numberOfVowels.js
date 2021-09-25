const numberOfVowels = function(data) {
  let vowels = 0;
  for (const letter of data) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      vowels++;
    }
  }
  return vowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels('todd demone'));
console.log(numberOfVowels("zzzzzzzzzz"));
console.log(numberOfVowels(''));