import { reverse } from "dns";

// Code your solution here!
function printString(myString) {
  console.log(myString)

<<<<<<< HEAD
function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1) {
=======
  if (myString.length > 0) {
>>>>>>> 3047177dbcf957bd1c4a54c57cd633719f56b411
    let mySubstring = myString.substring(1, myString.length);
    printString(mySubstring)
  }
}
<<<<<<< HEAD

function reverseString(myString) {
  if (myString === '') {
    return "";
  } else {
    return reverseString(myString.substr(1)) + myString.charAt(0)
  }
}

function isPalindrome(myString) {
  if (myString[0] === myString[myString.length-1]) {
    isPalindrome(myString.substr(1, myString.length-1))
  } else {
    return false
  }
  return true;
  // const length = str.length
  // for (var i = 0; i < length / 2; i++) {
  //   if (str[i] !== str[length - 1 - i]) {
  //     return false
  //   }
  // }
  // return true
}

=======
>>>>>>> 3047177dbcf957bd1c4a54c57cd633719f56b411
