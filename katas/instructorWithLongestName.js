const instructorWithLongestName = function(instructors) {
  let winningInstructor;
  let longestName = 0;

  for (const instructor of instructors) {
    if (instructor.name.length > longestName) {
      winningInstructor = instructor;
      longestName = instructor.name.length;
    }
  }
  return winningInstructor;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));