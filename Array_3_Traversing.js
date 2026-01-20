

let arr=[12,56,34,27,89,45,11,48,23];

// -----------------------------------
// 1. Simple FOR loop (Most Important)
// -----------------------------------
console.log("1. For loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// -----------------------------------
// 2. While loop
// -----------------------------------
console.log("2. While loop:");
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

// -----------------------------------
// 3. Do-While loop
// -----------------------------------
console.log("3. Do-While loop:");
let j = 0;
do {
  console.log(arr[j]);
  j++;
} while (j < arr.length);


// -----------------------------------
// 4. for...of loop (Value-based)
// -----------------------------------
console.log("4. for...of loop:");
for (let value of arr) {
  console.log(value);
}

// -----------------------------------
// 5. for...in loop (Index-based)
// -----------------------------------
console.log("5. for...in loop:");
for (let index in arr) {
  console.log(arr[index]);
}

// -----------------------------------
// 6. forEach (callback traversal)
// -----------------------------------
console.log("6. forEach:");
// arr.forEach((value, index) => {
//   console.log("Index:", index, "Value:", value);
// });

const arrForEach=arr.forEach((value, index) => {
  return value;
});
console.log(arrForEach);


// -----------------------------------
// 7. Reverse traversal
// -----------------------------------
console.log("7. Reverse traversal:");
for (let k = arr.length - 1; k >= 0; k--) {
  console.log(arr[k]);
}

// -----------------------------------
// 8. Traversal using map (not preferred for DSA)
// -----------------------------------
// console.log("8. map traversal:");
// arr.map((value) => {
//   console.log(value);
// });

const arrMap=arr.map((value, index) => {
  return value;
});
console.log(arrMap);
// -----------------------------------
// 9. Traversal using reduce
// -----------------------------------
console.log("9. reduce traversal:");
arr.reduce((_, value) => {
  console.log(value);
  return 0;
}, 0);

// -----------------------------------
// 10. Traversal using recursion (DSA)
// -----------------------------------
console.log("10. Recursive traversal:");
function traverseRecursive(arr, index) {
  if (index === arr.length) return;
  console.log(arr[index]);
  traverseRecursive(arr, index + 1);
}
traverseRecursive(arr, 0);

// -----------------------------------
// 11. Traversal using for loop with step
// -----------------------------------
console.log("11. Traversal with step = 2:");
for (let m = 0; m < arr.length; m += 2) {
  console.log(arr[m]);
}

// -----------------------------------
// 12. Traversal from specific index
// -----------------------------------
console.log("12. Traversal from index 2:");
for (let n = 2; n < arr.length; n++) {
  console.log(arr[n]);
}