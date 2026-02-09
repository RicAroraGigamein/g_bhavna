// const arr=[1,2,3];

// subarrays will be?
// [1]
// [2]
// [3]
// [1,2]
// [2,3]
// [1,2,3]
// Must be contiguous (continuous)
// [1,3] → Not a subarray but it is subsequence



// Array: [1, 2, 3]
// Subarrays:
// Total Number of Subarrays Formula
// For array size = n
// Total subarrays = n(n+1) / 2



// 1. Print All Subarrays
// Question:
// Given an array of integers, print all possible subarrays.
// Input:
// arr = [1, 2, 3]
// Output:
// [1], [2], [3], [1,2], [2,3], [1,2,3]


//  with slice method
// let arr = [1, 2, 3];

// // Method 1 – Using Nested Loops + Slice
// console.log("All Subarrays:");

// for (let start = 0; start < arr.length; start++) {
//   for (let end = start; end < arr.length; end++) {
//     console.log(arr.slice(start, end + 1));
//   }
// }

//  with brute force approach
// let arr2 = [1, 2, 3];

// console.log("All Subarrays (Brute):");

// for (let i = 0; i < arr2.length; i++) {
//   let sub = [];

//   for (let j = i; j < arr2.length; j++) {
//     sub.push(arr2[j]);
//     console.log([...sub]);
//   }
// }




// 2. Count Total Subarrays Question: Given an array of size N, count the total number of subarrays. 
// Input: arr = [1, 2, 3] 
// Output: 6

// ==========================================
// COUNT TOTAL SUBARRAYS – BRUTE FORCE (JS)
// Function Calling – DSA Style
// ==========================================

// Function to count total subarrays
// function countTotalSubarrays(arr) {
//   let count = 0;

//   // Generate all subarrays
//   for (let start = 0; start < arr.length; start++) {
//     for (let end = start; end < arr.length; end++) {
//       count++;   // each subarray counted
//     }
//   }

//   return count;
// }

// let arr = [1, 2, 3];
// let result = countTotalSubarrays(arr);
// console.log("Total Subarrays:", result);


// 3. Sum of All Subarrays
// Question:
// Find the sum of all subarrays of the given array.
// Input:
// arr = [1, 2]
// Output:
// 6
// (Subarrays: [1], [2], [1,2] → Sum = 1+2+3)



// Function to find sum of all subarrays
// function sumOfAllSubarrays(arr) {
//   let totalSum = 0;

//   // Generate all subarrays
//   for (let start = 0; start < arr.length; start++) {
//     let subSum = 0;

//     for (let end = start; end < arr.length; end++) {
//       subSum += arr[end];   // add current element
//       totalSum += subSum;   // add subarray sum
//     }
//   }

//   return totalSum;
// }

// let arr = [1, 2];
// let result = sumOfAllSubarrays(arr);
// console.log("Sum of All Subarrays:", result);



// Print Subarrays with Sum = 0
// Question:
// Print all subarrays whose sum equals zero.
// Input:
// arr = [1, -1, 2, -2]
// Output:
// [1,-1], [2,-2], [1,-1,2,-2]



// Function to print subarrays whose sum = 0
function printZeroSumSubarrays(arr) {
  let found = false;

  for (let start = 0; start < arr.length; start++) {
    let sum = 0;

    for (let end = start; end < arr.length; end++) {
      sum += arr[end];

      if (sum === 0) {
        console.log(arr.slice(start, end + 1));
        found = true;
      }
    }
  }

  if (!found) {
    console.log("No zero sum subarray found");
  }
}
let arr = [1, -1, 2, -2];

printZeroSumSubarrays(arr);
