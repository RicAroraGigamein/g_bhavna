// ==========================================
// LINEAR SEARCH & BINARY SEARCH IN JS (DSA)
// ONE FILE – CLEAN & INTERVIEW READY
// ==========================================

// ------------------------------------------
// 1. LINEAR SEARCH
// Works on: Sorted + Unsorted arrays
// Time Complexity: O(n)
// ------------------------------------------

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // element found
    }
  }
  return -1; // not found
}

// Test Linear Search
let arr1 = [40, 10, 30, 20, 50];
console.log("Linear Search Index:",
  linearSearch(arr1, 30)); // 2



// ------------------------------------------
// 2. LINEAR SEARCH – ALL OCCURRENCES
// ------------------------------------------

function linearSearchAll(arr, target) {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indexes.push(i);
    }
  }
  return indexes;
}

// Test
// let arr2 = [10, 20, 30, 20, 40, 20];
// console.log("Linear Search All:",
//   linearSearchAll(arr2, 20)); // [1, 3, 5]



//   function linearSearch(arr, index, target) {
//     // Base case
//     if (index === arr.length) {
//         return -1;
//     }

//     // If found
//     if (arr[index] === target) {
//         return index;
//     }

//     // Recursive call
//     return linearSearch(arr, index + 1, target);
// }

// // Example
// const arr1 = [4, 2, 7, 1, 9];
// console.log(linearSearch(arr, 0, 7)); // Output: 2


// ------------------------------------------
// 3. BINARY SEARCH (ITERATIVE)
// Works ONLY on sorted array
// Time Complexity: O(log n)
// ------------------------------------------

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// Test Binary Search
let arr3 = [10, 20, 30, 40, 50,60,70,80,90];
console.log("Binary Search Index:",
  binarySearch(arr3, 90)); // 3


  // recursion
  function linearSearch(arr, index, target) {
    // Base case
    if (index === arr.length) {
        return -1;
    }

    // If found
    if (arr[index] === target) {
        return index;
    }

    // Recursive call
    return linearSearch(arr, index + 1, target);
}

// Example
const arr = [4, 2, 7, 1, 9];
console.log(linearSearch(arr, 0, 7)); // Output: 2


// ------------------------------------------
// 4. BINARY SEARCH (RECURSIVE)
// ------------------------------------------

function binarySearchRecursive(arr, target, start, end) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, end);
  } else {
    return binarySearchRecursive(arr, target, start, mid - 1);
  }
}

// Test Recursive Binary Search
console.log("Binary Search Recursive Index:",
  binarySearchRecursive(arr3, 10, 0, arr3.length - 1)); // 0



// ------------------------------------------
// 5. IMPORTANT INTERVIEW NOTES
// ------------------------------------------
/*
LINEAR SEARCH:
✔ Works on unsorted data
✔ Simple & safe
 Slow for large arrays

BINARY SEARCH:
✔ Very fast
 Requires sorted array
 Random access required

Use Linear → small/unsorted data
Use Binary → large/sorted data
*/



// =======================================
// FIRST & LAST OCCURRENCE (BINARY SEARCH)
// =======================================

function firstOccurrence(arr, target) {
  let start = 0, end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      result = mid;
      end = mid - 1; // move left
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

function lastOccurrence(arr, target) {
  let start = 0, end = arr.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      result = mid;
      start = mid + 1; // move right
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
}

// Test
let arr = [10, 20, 20, 20, 30, 40];
console.log("First:", firstOccurrence(arr, 20)); // 1
console.log("Last:", lastOccurrence(arr, 20));  // 3
