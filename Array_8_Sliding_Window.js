// // // Q1. Given an array of integers and a positive integer K, find the maximum sum of any subarray of size K.
// // arr = [2, 1, 5, 1, 3, 2]
// // K = 3

// // output:- 9


// function maxSumSubarray(arr, k) {
//   let n = arr.length;
//   if (k > n) return null;
//   let windowSum = 0;
//   // Calculate sum of first window
//   for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
//   }
//   let maxSum = windowSum;
//   // Slide the window
//   for (let i = k; i < n; i++) {
//     windowSum += arr[i];      // add next element
//     windowSum -= arr[i - k];  // remove element going out
//     maxSum = Math.max(maxSum, windowSum);
//   }

//   return maxSum;
// }

// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;
// console.log(maxSumSubarray(arr, k));


//Question 2 Given a string and an integer K, find the length of the longest substring containing at most K distinct characters.
// str = "araaci"
// K = 2


function longestSubstringKDistinct(str, K) {
  let left = 0;
  let maxLength = 0;
  let charCount = new Map();

  for (let right = 0; right < str.length; right++) {
    let ch = str[right];
    charCount.set(ch, (charCount.get(ch) || 0) + 1);
    // Shrink window if distinct characters > K
    while (charCount.size > K) {
      let leftChar = str[left];
      charCount.set(leftChar, charCount.get(leftChar) - 1);

      if (charCount.get(leftChar) === 0) {
        charCount.delete(leftChar);
      }
      left++;
    }
    // Update max length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Driver code
let str = "araaci";
let K = 2;
console.log(longestSubstringKDistinct(str, K));



