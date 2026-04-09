// What is a “negation”?
// Negation means:
// x → -x

// Examples:
// 5 → -5
// -3 → 3


// Maximum Sum After K Negations
// Input:
// nums = [2, -3, 4], k = 2
// Step-by-step:
// Operation 1: pick -3 → becomes 3
// Array → [2, 3, 4]
// Operation 2: pick 2 → becomes -2
// Array → [-2, 3, 4]-----> sum is 5


function maximizeSum(nums, k) {
    // Step 1: Sort array (ascending)
    nums.sort((a, b) => a - b);
    // Step 2: Negate negative numbers first
    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] = -nums[i];
            k--;
        }
    }
    // Step 3: If k is still odd
    if (k % 2 === 1) {
        // Find index of smallest element
        let minIndex = 0;
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[minIndex]) {
                minIndex = i;
            }
        }
        nums[minIndex] = -nums[minIndex];
    }
    // Step 4: Return sum
    return nums.reduce((sum, val) => sum + val, 0);
}

// Example
let nums = [-2, -3, 4, 5];
[-2,3,4,5]
[2,3,4,5]

let k = 3;
let result = maximizeSum(nums, k);
console.log(result);  // Output: 10