function isPalindrome(word) {
  const palindrome = word.split("").reverse().join("");
   const checkPalindrome=(palindrome===word) ? true : false;
   return checkPalindrome;
}
const palindrome=word.reverse
  if (palindrome===word){
    return true
  }
  else{
    return false
  }

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));const palindrome=word.reverse
  if (palindrome===word){
    return true
  }
  else{
    return false
  }

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
