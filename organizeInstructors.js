// organizeInstructors.js
// Kata 15 - Organizing Instructors
// input = an array of objects
//          each object has two properties: name and course
// output = an object
//        = each key is a course
//        = each property is an array of names 
//          ie a list of the instructors for that course
const organizeInstructors = function(instructors) {
  // create the output object 
  const courses = {};
  // iterate through each object in the input array 
  for (const entry of instructors) {
    const course = entry.course;
    const instructor = entry.name;
    // check whether the course is already included as a key  
    // in the output object
    if (course in courses) {
      // if the course is already a key in the output object, 
      // then push the instructor name to that key's array 
      courses[course].push(instructor);
    } else {
      // if the course hasn't yet been added as a key to the 
      // output object, then
      // => add the course as a key
      // => create an empty array as the key's value
      // => push the instructor name to this new array
       courses[course] = [];
       courses[course].push(instructor);
    }
  }
  return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));