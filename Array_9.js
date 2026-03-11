// // // function longestSubarraysEqual0And1s(arr) {
// // //     let left = 0;
// // //     let maxLen = 0;
// // //     let ones = 0;
// // //     let zeros = 0;
// // //     let subArray = [];
// // //     for(let right = 0; right < arr.length; right++) {
// // //         subArray.push(arr[right]);
// // //         let len = subArray.length;
// // //         console.log("Len", subArray.length);
// // //         console.log("SubArray", subArray);
// // //         if ( arr[right] === 1) {
// // //             ones++;
// // //         } else {
// // //             zeros++;
// // //         }

// // //         let count = false;
// // //         if((len % 2) === 0) {
// // //             console.log(ones, zeros);
// // //             console.log(subArray);
// // //             if(ones !== zeros) {
// // //                 if(arr[left] === 1) {
// // //                     ones--;
// // //                 } else {
// // //                     zeros--;
// // //                 }
// // //                 subArray.shift();
// // //                 left++;
// // //                 count = true;
// // //                 maxLen--;
// // //             }
// // //         }
// // //         if(subArray.length % 2 !== 0 &&  count) {
// // //             subArray.pop();
// // //             maxLen--;
// // //         }
// // //         console.log("End", subArray);
// // //         maxLen = subArray.length;
// // //     }
// // //     return maxLen;
// // // }
// // // let arr21 = [1, 0, 1, 0, 1, 1, 1];
// // // console.log("The length of the longest contigous subarray that contains an equal of 0s and 1s:",
// // //     longestSubarraysEqual0And1s(arr21));





// // function longestSubarraysEqual0And1s(arr) {

// //     let maxLen = 0;

// //     for (let left = 0; left < arr.length; left++) {

// //         let zeros = 0;
// //         let ones = 0;

// //         for (let right = left; right < arr.length; right++) {

// //             if (arr[right] === 0) {
// //                 zeros++;
// //             } else {
// //                 ones++;
// //             }

// //             // check condition
// //             if (zeros === ones) {
// //                 let len = right - left + 1;
// //                 maxLen = Math.max(maxLen, len);
// //             }
// //         }
// //     }

// //     return maxLen;
// // }

// // let arr = [1, 0, 1, 0, 1, 1, 1];

// // console.log(
// // "The length of the longest contiguous subarray with equal 0s and 1s:",
// // longestSubarraysEqual0And1s(arr)
// // );


// // function longestSubarraysEqual0And1s(arr) {
// //     let map = new Map();
// //     let sum = 0;
// //     let maxLen = 0;
// //     map.set(0, -1); // important base case
// //     for (let i = 0; i < arr.length; i++) {
// //         // convert 0 -> -1
// //         if (arr[i] === 0) {
// //             sum += -1;
// //         } else {
// //             sum += 1;
// //         }
// //         if (map.has(sum)) {
// //             let length = i - map.get(sum);
// //             maxLen = Math.max(maxLen, length);
// //         } else {
// //             map.set(sum, i);
// //         }
// //     }
// //     return maxLen;
// // }
// // let arr21 = [1, 0, 1, 0, 1, 1, 1];

// // console.log(
// // "The length of the longest contiguous subarray that contains equal number of 0s and 1s:",
// // longestSubarraysEqual0And1s(arr21)
// // );

// // function countOccurrencesAnagrams(str, pattern) {
// //     let strlen = str.length;
// //     let patternLen = pattern.length;
// //     let count = 0;
// //     if(patternLen > strlen) return 0;
// //     let windowStr = "";
// //     for(let i = 0; i < patternLen; i++) {
// //         let char = str[i];
// //         windowStr = windowStr.concat(char);
// //     }
// //     if(isMatch(windowStr, pattern)) count++;
// //     for(let i = patternLen; i < str.length; i++) {
// //         windowStr = windowStr.concat(str[i]);
// //         windowStr = windowStr.slice(1);
// //         if(isMatch(windowStr, pattern)) count++;
// //     }
// //     return count;
// // }
// // function isMatch(windowStr, pattern) {
// //     if(windowStr.length !== pattern.length) return false;
// //     let found = true;;
// //     for(let c of pattern) {
// //         if(windowStr.indexOf(c) === -1) {
// //             found = false;
// //         }
// //     }
// //     return found;
// // }
// // let str3 = "forxxorfxdofr", pattern = "for";
// // console.log("The number of substrings of the given string are anagrams of the pattern:", 
// //     countOccurrencesAnagrams(str3, pattern))


// function countOccurrencesAnagrams(str, pattern) {
//     let k = pattern.length;
//     let count = 0;
//     let freq = {};
//     // Build frequency map
//     for (let ch of pattern) {
//         freq[ch] = (freq[ch] || 0) + 1;
//     }    let distinct = Object.keys(freq).length;

//     let left = 0;
//     for (let right = 0; right < str.length; right++) {
//         let char = str[right];
//         if (char in freq) {
//             freq[char]--;
//             if (freq[char] === 0) {
//                 distinct--;
//             }
//         }        // window size reached
//         if (right - left + 1 === k) {
//             if (distinct === 0) {
//                 count++;
//             }
//             let leftChar = str[left];
//             if (leftChar in freq) {
//                 if (freq[leftChar] === 0) {
//                     distinct++;
//                 }
//                 freq[leftChar]++;
//             }

//             left++;
//         }
//     }

//     return count;
// }

// let str3 = "forxxorfxdofr";
// let pattern = "for";
// console.log("The number of substrings of the given string are anagrams of the pattern:",
// countOccurrencesAnagrams(str3, pattern))


1)https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/ (Leetcode 2461)
2)https://leetcode.com/problems/sliding-subarray-beauty/ (Leetcode 2653)
3)https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/ (Leetcode 1423)
4)https://leetcode.com/problems/maximum-average-subarray-i/ (Leetcode 643)
5)https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/ (Leetcode 1343)
6)https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/ (Leetcode 1461)
7)https://leetcode.com/problems/find-all-anagrams-in-a-string/ (Leetcode 438)
8)https://leetcode.com/problems/permutation-in-string/ (Leetcode 567)
9)https://leetcode.com/problems/sliding-window-maximum/ (Leetcode 239)
10)https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/ (Leetcode 1876)
11)https://leetcode.com/problems/minimum-discards-to-balance-inventory/ (Leetcode 3679)
12)https://leetcode.com/problems/find-the-power-of-k-size-subarrays-ii/ (Leetcode 3255)
13)https://leetcode.com/problems/best-time-to-buy-and-sell-stock-using-strategy/ (Leetcode 3652)
14)https://leetcode.com/problems/alternating-groups-ii/description/ (Leetcode 3208)

Variable Sized Sliding Window:
15)https://leetcode.com/problems/find-the-longest-semi-repetitive-substring/ (Leetcode 2730)
16)https://leetcode.com/problems/count-the-number-of-good-subarrays/ (Leetcode 2537)
17)https://leetcode.com/problems/minimum-consecutive-cards-to-pick-up/ (Leetcode 2260)
18)https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/ (Leetcode 1658)
19)https://leetcode.com/problems/count-number-of-nice-subarrays/ (Leetcode 1248)
20)https://leetcode.com/problems/fruit-into-baskets/ (Leetcode 904)
21)https://leetcode.com/problems/max-consecutive-ones-iii/ (Leetcode 1004)
22)https://leetcode.com/problems/subarray-product-less-than-k/ (Leetcode 713)
23)https://leetcode.com/problems/minimum-size-subarray-sum/ (Leetcode 209)
24)https://leetcode.com/problems/longest-substring-without-repeating-characters/ (Leetcode 3)
25)https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/ (Leetcode 3097)
26)https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/ (Leetcode 2958)
27)https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/ (Leetcode 2962)
28)https://leetcode.com/problems/count-prime-gap-balanced-subarrays/ (Leetcode 3589)
29)https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-ii/ (Leetcode 3306)