
let arr = [10, 20, 30, 40];

// ---------------------------------------
// 1. Sum of array elements
// ---------------------------------------
let sum = arr.reduce((acc, value) => {
  return acc + value;
}, 0);
console.log("Sum:", sum); // 100

// ---------------------------------------
// 2. Product of array elements
// ---------------------------------------
let product = arr.reduce((acc, value) => {
  return acc * value;
}, 1);
console.log("Product:", product); // 240000

// ---------------------------------------
// 3. Find maximum element
// ---------------------------------------
let max = arr.reduce((acc, value) => {
  return value > acc ? value : acc;
}, arr[0]);
console.log("Max:", max); // 40

// ---------------------------------------
// 4. Find minimum element
// ---------------------------------------
let min = arr.reduce((acc, value) => {
  return value < acc ? value : acc;
}, arr[0]);
console.log("Min:", min); // 10

// ---------------------------------------
// 5. Count occurrences of elements
// ---------------------------------------
let arr2 = [1, 2, 2, 3, 3, 3];

let frequency = arr2.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});
console.log("Frequency:", frequency);

// ---------------------------------------
// 6. Flatten 2D array
// ---------------------------------------
let arr3 = [[1, 2], [3, 4], [5, 6]];

let flatArray = arr3.reduce((acc, value) => {
  return acc.concat(value);
}, []);
console.log("Flattened:", flatArray);

// ---------------------------------------
// 7. Remove duplicates
// ---------------------------------------
let arr4 = [10, 20, 10, 30, 20];

let unique = arr4.reduce((acc, value) => {
  if (!acc.includes(value)) {
    acc.push(value);
  }
  return acc;
}, []);
console.log("Unique:", unique);

// ---------------------------------------
// 8. Sum of even numbers only
// ---------------------------------------
let evenSum = arr.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc += value;
  }
  return acc;
}, 0);
console.log("Even Sum:", evenSum);

// ---------------------------------------
// 9. Convert array to object (index → value)
// ---------------------------------------
let obj = arr.reduce((acc, value, index) => {
  acc[index] = value;
  return acc;
}, {});
console.log("Object:", obj);

// ---------------------------------------
// 10. IMPORTANT INTERVIEW
