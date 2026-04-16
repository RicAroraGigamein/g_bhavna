// // 1. What is Dynamic Programming (DP)?
// // Dynamic Programming is an optimization technique used when:
// // A problem has overlapping subproblems
// // It has optimal substructure
// // Brute force recursion is too slow
// // DP stores previously computed results and reuses them.

// // 2. Simple Definition
// // Dynamic Programming = Recursion + Memorization (Storage)
// // Instead of solving the same problem again and again, we store the answer and reuse it.

// // 3. When to Use DP
// // Use DP when you see:
// // Count ways / number of ways
// // Minimum / Maximum cost
// // Longest / Shortest subsequence
// // Partitioning problems
// // Optimization over choices

// // 4. Common keywords:
// // Ways
// // Minimum
// // Maximum
// // Longest
// // Shortest
// // Can we reach
// // Is it possible

// // 4. Two Properties of DP
// // 4.1 Overlapping Subproblems
// // Same subproblem repeats.
// // Example: Fibonacci
// // fib(5) calls fib(4) and fib(3)
// // fib(4) again calls fib(3)
// // fib(3) repeats.

// // 4.2 Optimal Substructure
// // Optimal solution depends on optimal solution of subparts.
// // Example: Shortest path, knapsack, etc.



// // // // O(2^n) time, O(n) recursion stack
// function fibRec(n) {
//   if (n <= 1) return n;
//   return fibRec(n - 1) + fibRec(n - 2);
// }

// console.log(fibRec(10)); // 55


// // // O(n) time, O(n) space (memo + recursion stack)
// // // // 2) Memoization — recursion + cache (top-down DP)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}
console.log(fibMemo(10)); // 55

// fibMemo(10)
// ├── fibMemo(9)
// │   ├── fibMemo(8)
// │   │   ├── fibMemo(7)fibMemo(1) 
// │   │   │   ├── fibMemo(6)
// │   │   │   │   ├── fibMemo(5)
// │   │   │   │   │   ├── fibMemo(4)
// │   │   │   │   │   │   ├── fibMemo(3)
// │   │   │   │   │   │   │   ├── fibMemo(2)----> 1 n 0
// │   │   │   │   │   │   │   │   ├── → 1
// │   │   │   │   │   │   │   │   └── fibMemo(0) → 0
// │   │   │   │   │   │   │   └── fibMemo(1) → 1
// │   │   │   │   │   │   └── fibMemo(2) → from memo
// │   │   │   │   │   └── fibMemo(3) → from memo
// │   │   │   │   └── fibMemo(4) → from memo
// │   │   │   └── fibMemo(5) → from memo
// │   │   └── fibMemo(6) → from memo
// │   └── fibMemo(7) → from memo
// └── fibMemo(8) → from memo



// // // 3) Tabulation — bottom-up DP (iterative)
// // // O(n) time, O(n) space
// function fibTab(n) {
//   if (n <= 1) return n;
//   const dp = new Array(n + 1).fill(0);
//   dp[0] = 0;
//   dp[1] = 1;
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }
//   return dp[n];
// }

// console.log(fibTab(10)); // 55


// 2. Climbing Stairs
// You can climb 1 or 2 steps at a time. Return the number of distinct ways to reach to nth step.

// 5----- 1,1,1,1,1
//         1,2,2
//         2,1,2
//         2,2,1
//         1,1,1,2
//         1,2,1,1
//         1,1,2,1
//         2,1,1,1


// 1---- 1
// 2---- 1+1
//     2
// 3---- 1+1+1
//       2+1
//       1+2


// 4----- 1,1,1,1
//        1,2,1
//        1,1,2
//        2,1,1
//        2,2


// 0 1 1 2 3 5

// House Robber
// Problem Statement
// A robber wants to steal money from houses arranged in a straight line.
// Each house has some amount of money, but the robber cannot rob two adjacent houses because that would alert the police.
// Your task is to find the maximum amount of money the robber can steal without robbing two adjacent houses.

// Input:
// nums = [1,2,3,1]
// Output:
// 4


// input: [2,1,1,2]
// outout: 
