// ===============================
// ARRAY DELETION IN JS (ONE FILE)
// Predefined + Brute Force
// ===============================

// -------------------------------
// 1. DELETE FROM END
// -------------------------------

// Predefined method
let arr1 = [10, 20, 30, 40];
arr1.pop();
console.log("Delete from end (predefined):", arr1);

// Brute force
let arr2 = [10, 20, 30, 40];
arr2.length = arr2.length - 1;
console.log("Delete from end (brute force):", arr2);

// -------------------------------
// 2. DELETE FROM START
// -------------------------------

// Predefined method
let arr3 = [10, 20, 30, 40];
arr3.shift();
console.log("Delete from start (predefined):", arr3);

// Brute force
let arr4 = [10, 20, 30, 40];
for (let i = 0; i < arr4.length - 1; i++) {
  arr4[i] = arr4[i + 1];
}
arr4.length = arr4.length - 1;
console.log("Delete from start (brute force):", arr4);

// -------------------------------
// 3. DELETE FROM IN-BETWEEN
// -------------------------------

// Predefined method
let arr5 = [10, 20, 30, 40, 50];
let index1 = 2;
arr5.splice(index1, 1);
console.log("Delete from middle (predefined):", arr5);

// Brute force
let arr6 = [10, 20, 30, 40, 50];
let index2 = 2;

for (let i = index2; i < arr6.length - 1; i++) {
  arr6[i] = arr6[i + 1];
}
arr6.length = arr6.length - 1;
console.log("Delete from middle (brute force):", arr6);
