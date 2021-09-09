/**
 * Create a function that will remove duplicates from a string
 * You can expect to always receive a string.
 * Danny is Danny is is here. => Danny is here.
 * All might all might all might All might will win => All might will win
 */

function reverse(aString) {
  // do your implementation here
  return aString;
}

// these are our test cases for part 1
// left part of the tuple is the problem string
// right part of the tuple is the answer
const stringTuples = [
  ["Bob is here", "here is Bob"],
  ["Go beyond plus ultra", "ultra plus beyond Go"],
  ["", ""],
];

export { reverse, stringTuples };
