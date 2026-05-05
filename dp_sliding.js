// Problem: Maximum Sum Subarray
// Statement
// Given an integer array nums of size n which may contain both positive and negative integers, find the contiguous subarray (containing at least one element) that has the maximum sum, and return that sum.

// Example 1 (Mixed Positive + Negative)
// Input
// 9
// -2 1 -3 4 -1 2 1 -5 4
// Output
// 6
// Explanation
// Subarray [4, -1, 2, 1] → sum = 6 (maximum)

// Example 2 (All Negative)
// Input
// 5
// -8 -3 -6 -2 -5
// Output
// -2
// Explanation
// All numbers are negative, so pick the least negative number → -2

// Example 3 (All Positive)
// Input
// 5
// 2 3 1 5 4
// Output
// 15
// Explanation
// Whole array is the answer → sum = 15


// below is dynamic programming (Kadanes Algorithm)
function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([-8,-3,-6,-2,-5]));        // Output: -2
console.log(maxSubArray([2,3,1,5,4]));             // Output: 15



// using prefix sum

function maxSubArray(nums) {
    let prefixSum = 0;
    let minPrefix = 0;
    let maxSum = -Infinity;

    for (let num of nums) {
        prefixSum += num;

        maxSum = Math.max(maxSum, prefixSum - minPrefix);
        minPrefix = Math.min(minPrefix, prefixSum);
    }

    return maxSum;
}