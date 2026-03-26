
// // Prefix of an array = any subarray that starts at index 0. Formally: arr[0..i] for 0 ≤ i < n.

// // Suffix of an array = any subarray that ends at index n-1. Formally: arr[i..n-1] for 0 ≤ i < n

// // returns prefixSum array of length n+1 where prefixSum[i] = sum of arr[0..i-1]
function buildPrefixSums(arr) {
  const n = arr.length;
  const prefix = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  return prefix;
}


// arr:     [2   4   6   8]
// index:    0   1   2   3

// prefix:  [0   2   6  12  20]
// index:    0   1   2   3   4

// // returns suffixSum array of length n+1 where suffixSum[i] = sum of arr[i..n-1]
// // (suffixSum[n] = 0)
function buildSuffixSums(arr) {
  const n = arr.length;
  const suffix = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    suffix[i] = suffix[i + 1] + arr[i];
  }
  return suffix;
}

// // Example usage:
const arr = [1, 2, 3, 4];
const pref = buildPrefixSums(arr); // [0,1,3,6,10]
1
1+2
1+2+3
1+2+3+4

const suff = buildSuffixSums(arr); // [10,9,7,4,0]
1+2+3+4
2+3+4
3+4
4

// // sum of subarray arr[l..r] = pref[r+1] - pref[l]
// console.log(pref, suff);



// Q1. Longest Common Prefix (LCP) of an Array of Strings

// Given an array of strings, return the longest common prefix among all strings.
// If no common prefix exists, return "".

// Example:
// Input: ["flower","flow","flight",]
// Output: "fl"

// function longestCommonPrefix(strs) {
//   if (strs.length === 0) return "";

//   for (let i = 0; i < strs[0].length; i++) {
//     let char = strs[0][i];

//     for (let j = 1; j < strs.length; j++) {
//       if (i >= strs[j].length || strs[j][i] !== char) {
//         return strs[0].substring(0, i);
//       }
//     }
//   }

//   return strs[0];
// }


// // Driver code
// let strs = ["flower", "flow", "flight"];
// let result = longestCommonPrefix(strs);
// console.log("Input:", strs);
// console.log("Longest Common Prefix:", result);

// Q2. Longest Common Suffix of an Array of Strings

// Given an array of strings, return the longest common suffix.
// If no common suffix exists, return "".

// Example:
// Input: ["walking","king","ring",]
// Output: "ing"

function longestCommonPrefix(strs) {
  if (!strs || strs.length === 0) return "";

  let prefix = strs[0]; // take the first string as reference

  for (let i = 1; i < strs.length; i++) {
    let j = 0;

    // compare prefix with current string character by character
    while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
      j++;
    }

    // shrink prefix
    prefix = prefix.substring(0, j);

    // if prefix becomes empty, no common prefix
    if (prefix === "") return "";
  }

  return prefix;
}


function longestCommonSuffix(strs) {
  if (!strs || strs.length === 0) return "";

  // Reverse all strings for suffix → prefix trick
  let reversed = strs.map(s => reverseString(s));

  // Use prefix logic on reversed strings
  let reversedPrefix = longestCommonPrefix(reversed);

  // Reverse back to get the suffix
  return reverseString(reversedPrefix);
}

// Helper function to reverse a string manually (no predefined reverse method)
function reverseString(s) {
  let result = "";

  for (let i = s.length - 1; i >= 0; i--) {
    result += s[i];
  }

  return result;
}

console.log("LCP:", longestCommonPrefix(["flower", "flow", "flight"])); 
console.log("LCS:", longestCommonSuffix(["walking", "king", "ring"]));


// check if one string is a suffix of another


// product of all elements except itself

// [1,2,3,4]
// [24,12,8,6]

function productExceptSelf(nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  let result = new Array(n).fill(1);

  // build prefix
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i-1] * nums[i-1];
  }
  // build suffix
  for (let i = n-2; i >= 0; i--) {
    suffix[i] = suffix[i+1] * nums[i+1];
  }
  // build result
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }
  return result;
}
// O(n)+O(n)+O(n)
// O(3n)----> O(n)

// Driver code
// let nums = [1,2,3,4];
// newarr=[0,0,0,0]
// console.log(productExceptSelf(nums));


// // using brute force approach
// function productExceptSelf(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     let product = 1;

//     for (let j = 0; j < arr.length; j++) {
//       if (i !== j) {
//         product *= arr[j];
//       }
//     }

//     result.push(product);
//   }

//   return result;
// }

// console.log(productExceptSelf([1,2,3,4]));


// Why Sliding Window / Two Pointer WON’T Work
// This is the most important part 
//  1. Sliding Window is for continuous subarrays
// Sliding window works when:
// You deal with contiguous elements
// Example:
// Sum of subarray
// Max window
// Longest substring


// 2. Two Pointer is for pair-based problems
// Two pointers work when:
// You compare left & right
// Examples:
// Pair sum
// Sorted array operations
// Palindrome
// 👉 But here:
// You need global multiplication
// Not just 2 elements