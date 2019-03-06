// Primitive types: `string`, `number`, `boolean`, `null` and `undefined`
// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
var greeting = "Hello, Class!";
console.log("greeting", typeof greeting);
var isReadyForLecture = true;
console.log("isReadyForLecture", typeof isReadyForLecture);
var numberOfStudents = 23;
console.log("numberOfStudents", typeof numberOfStudents);
var averageGrade = 4.5;
console.log("averageGrade", typeof averageGrade);
var notDefined = undefined;
console.log("notDefined", typeof notDefined);
var nothing = null;
console.log("nothing", typeof nothing);

// Anything else is an Object type
var someArray = [1, "asdf", true, null];
console.log("someArray", typeof someArray);

// We create an object using an object literal `{}`
// Objects store key-value pairs, the key is always a string, whereas the value can be
// any value, including an array or other objects.
var job = {
  company: "Lighthouse Labs",
  started: "January 2017",
  courses: [
    {
      name: "web"
    },
    {
      name: "blockchain"
    }
  ],
  info: {
    name: "Dave",
    role: "Instructor"
  }
};

// Reading values from an object
// Using subscripting syntax
var company = job["company"]; // "Lighthouse Labs"
var started = job["started"]; // "January 2017"
// Using dot-notation
var courses = job.courses;

// Mixing styles
var firstCourse = job.courses[0]["name"]; // { name: "web" }

// Adding key value pairs, either way works
// the key here is "friends" and the value is an array containing "Juan"

// job["friends"] = ["Juan"];
job.friends = ["Juan"];

// Looping through all the key-value pairs of the object
// Get an array of all of the keys in the object
var keys = Object.keys(job);
console.log("keys", keys);

// Loop through all the keys
for (var i = 0; i < keys.length; i++) {
  // Create a local variable to hold on to the key we're currently looping through
  var key = keys[i];
  // Use the `key` variable to lookup the associated value in the object
  var value = job[key];
  console.log(key, ":", value);
}

// Alternative way using a `for ... in` loop
// for (var key in job) {
//   var value = job[key];
//   console.log(key, ":", value);
// }

// Primitive types are passed by value (i.e. copied)
var number = 10;

function add5(num) {
  // re-assigning the `num` variable here does not change the value outside of the
  // function
  num = num + 5;
  // but it does change it in the scope of the function itself.
  console.log("inside", num);
}

console.log("before", number); // 10
add5(number);
console.log("after", number); // 10

// Object types are passed by reference
// More reading on that here:
// https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c
// `gig` is an object being passed, `friend` is a value to add to the list of friends
function addFriend(gig, friend) {
  // reaching into the `gig` object modifies the passed object as well.
  gig.friends.push(friend);
}

// To start `job.friends` is `[ "Juan" ]`
console.log("before", job.friends);
// Invoking the `addFriend` function passing the job object as the `gig` parameter,
// and `"Tim"` as the `friend` parameter
addFriend(job, "Tim");
// After, `job.friends` is `[ "Juan", "Tim" ]`
console.log("after", job.friends);

// As long as the object has a friends key, the function will work with it as well.
var otherObject = { friends: [] };

// To start, `otherObject.friends` is `[]`
console.log("before", otherObject.friends);
// Invoking the `addFriend` function passing the `otherObject` object as the `gig`
// parameter, and `"Dave"` as the `friend` parameter
addFriend(otherObject, "Dave");
// After, `otherObject.friends` is `[ "Dave" ]`
console.log("after", otherObject.friends);

// Arrays are also object types
var myArray = [1, 1, 2, 3, 5, 8];
function changeArray(arr) {
  // calling push on the passed array mutates it in the outer scope.
  arr.push(13);
}

console.log("before", myArray);
changeArray(myArray);
// `myArray` now contains `13` as well.
console.log("after", myArray);

// `this`
// When a function is attached to an object, `this` references the object when the
// function is invoked.
function add(friend) {
  console.log(this);
  this.friends.push(friend);
}

// Creating a key-value pair, where the key is `add` and the value is the `add` function.
job.add = add;
// Invoking the function with the parameter `"Cam"`
// When this runs, `this` will reference the `job` object.
job.add("Cam");

// Creating a key-value pair, where the key is `add` and the value is the `add` function.
otherObject.add = add;
// Invoking the function with the parameter `"John"`
// When this runs, `this` will reference the `otherObject` object.
otherObject.add("John");
