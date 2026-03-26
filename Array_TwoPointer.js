// // What is Two Pointers Technique?
// // Two Pointers is a technique where we use two indices (pointers) to traverse an array/string in a controlled way instead of using nested loops.
// // Helps reduce time complexity from O(n²) → O(n) in many problems.

// // When to Use Two Pointers
// // Use it when:
// // Array/string is sorted (very common)
// // Working on pairs / triplets

// // Need to:
// // Find sum / difference
// // Remove duplicates
// // Reverse elements
// // Partition array
// // Window expands & shrinks from ends


// // Types of Two Pointer Patterns
// // 1️. Opposite Direction (Start ↔ End)
// // Pointers start from both ends and move inward.

// // Used for:
// // Pair sum
// // Palindrome check
// // Reverse array/string
// // Container water problem

// // Example: Pair with Target Sum
// // Problem Statement
// // Given a sorted array of integers and a target value X, determine whether there exists a pair of elements in the array whose sum is equal to X.

// // Return true if such a pair exists, otherwise return false.
// // Input
// // arr = [1, 2, 3, 4, 6]
// // X = 6
// // Output
// // true or print arry values which make sum=target sum (2,4)


// // Possible pairs:
// // (1, 2) → sum = 3
// // (1, 3) → sum = 4
// // (2, 4) → sum = 6 
// // Since a valid pair exists → true


// /*
// Problem:
// Given a sorted array and a target sum,
// find if any pair exists whose sum = target.
// Return true or false.
// */

// function pairSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let sum = arr[left] + arr[right];

//     if (sum === target) {
//       return true;
//     } 
//     else if (sum < target) {
//       left++;        // move left forward to increase sum
//     } 
//     else {
//       right--;       // move right backward to decrease sum
//     }
//   }

//   return false;
// }

// // let arr = [1, 2, 3, 4, 6];
// // let target = 6;
// // let result = pairSum(arr, target);
// // console.log("Array:", arr);
// // console.log("Target:", target);
// // console.log("Pair Exists:", result);




// // 2️. Same Direction (Fast & Slow Pointer)
// // Both pointers move forward but at different speeds.

// // Used for:
// // Remove duplicates
// // Move zeros
// // Cycle detection (linked list)
// // Partition array

// // Problem Statement
// // Given a sorted array of integers, remove the duplicate elements in-place such that each element appears only once and return the new length of the array.
// // Do not use extra space for another array.

// // Input
// // arr = [1, 1, 2, 2, 3, 4, 4]

// // Output
// // New Length = 4
// // Modified Array = [1, 2, 3, 4]

// // Explanation
// // Original array:
// // [1, 1, 2, 2, 3, 4, 4]

// // After removing duplicates:
// // [1, 2, 3, 4]
// // New length = 4

// // Pointer i → tracks unique elements position
// // Pointer j → scans the array
// // When a new element is found → place it at i+1


// function removeDuplicates(arr) {
//   if (arr.length === 0) return 0;

//   let i = 0;  // pointer for unique elements

//   for (let j = 1; j < arr.length; j++) {
//     if (arr[j] !== arr[i]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }

//   return i + 1; // new length
// }

// let arr = [1, 1, 2, 2, 3, 4, 4];
// let newLength = removeDuplicates(arr);
// console.log("New Length:", newLength);
// console.log("Modified Array:", arr.slice(0, newLength));




// // 3️. Sliding Window (Dynamic Two Pointers)
// // Both pointers define a window.
// // We already covered this, but remember:
// // Sliding window = Two pointers + window logic.

// // Visual Understanding
// // Array:
// // [1, 2, 3, 4, 6]
// // Target = 6

// // L → 1         6 ← R   sum=7 >6 → R--
// // L → 1     4 ← R       sum=5 <6 → L++
// // L → 2     4 ← R       sum=6 


// // Q1.
// // Given an array of positive integers and a target sum S, find the length of the longest contiguous subarray whose sum is less than or equal to S.

function longestSubarraySumAtMostS(arr, S) {
  let left = 0;
  let sum = 0;
  let maxLength = 0;
  for (let right = 0; right < arr.length; right++) {
    // Expand window
    sum += arr[right];
    // Shrink window if sum exceeds S
    while (sum > S) {
      sum -= arr[left];
      left++;
    }
    // Update max length
    let windowLength = right - left + 1;
    maxLength = Math.max(maxLength, windowLength);
  }
  return maxLength;
}

// let arr = [2, 1, 5, 1, 3, 2];
// let S = 7;
// let result = longestSubarraySumAtMostS(arr, S);
// console.log("Array:", arr);
// console.log("Target Sum:", S);
// console.log("Longest Length:", result);
// // Q2.
// // Given an array of positive integers and a target sum S, find the length of the smallest contiguous subarray whose sum is greater than or equal to S.
// // If no such subarray exists, return 0.

// // Q3.
// // Given an array of positive integers and a value K, find the maximum sum of any contiguous subarray whose sum does not exceed K.



// Given an array and a target value, find the triplet whose sum is closest to the target.
// Input:
// arr = [1, 4, 45, 6, 10, 8]
// target = 22

// Output:
// true



function hasTripletSum(arr, target) {
  // Step 1: Sort the array
  arr.sort((a, b) => a - b);  //1,4,6,8,10,45

  let n = arr.length; //6

  // Step 2: Fix one element
  for (let i = 0; i < n - 2; i++) {

    let left = i + 1;
    let right = n - 1;

    // Step 3: Two pointer search
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        return true;
      }
      else if (sum < target) {
        left++;
      }
      else {
        right--;
      }
    }
  }

  return false;
}


let arr = [1, 4, 45, 6, 10, 8];
let target = 22;

let result = hasTripletSum(arr, target);

console.log("Array:", arr);
console.log("Target:", target);
console.log("Triplet Exists:", result);
