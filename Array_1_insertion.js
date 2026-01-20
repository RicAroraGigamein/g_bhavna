// ===============================
// ORIGINAL ARRAY
// ===============================
let arr = [10, 20, 30, 40];

console.log("Original Array:", arr);

// ===============================
// 1. INSERT AT START
// ===============================

// ---- Brute Force ----
function insertAtStartBrute(arr, value) {
//   let newArr = new Array(arr.length + 1);

//   newArr[0] = value;

//   for (let i = 0; i < arr.length; i++) {
//     newArr[i + 1] = arr[i];
//   }

//   return newArr;


// using same array
// for (let i = 0; i < arr.length; i++) {
//     arr[i + 1] = arr[i];
//   }

//   arr[0] = value;

  
//   return arr;

for (let i=0; i <=arr.length+1; i++) {
let temp = arr[i];
arr[0] = value;
arr[i+1] = temp;
}
console.log("bhavna code", arr);


}

// ---- Predefined ----
function insertAtStartBuiltIn(arr, value) {
  arr.unshift(value);
  return arr;
}

// ===============================
// 2. INSERT AT END
// ===============================

// ---- Brute Force ----
function insertAtEndBrute(arr, value) {
  let newArr = new Array(arr.length + 1);

  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i];
  }

  newArr[arr.length] = value;

  return newArr;
}

// ---- Predefined ----
function insertAtEndBuiltIn(arr, value) {
  arr.push(value);
  return arr;
}

// ===============================
// 3. INSERT AT ANY POSITION
// ===============================
// position = index (0-based)

// ---- Brute Force ----
function insertAtPositionBrute(arr, value, pos) {
  let newArr = new Array(arr.length + 1);

  for (let i = 0; i < pos; i++) {
    newArr[i] = arr[i];
  }

  newArr[pos] = value;

  for (let i = pos; i < arr.length; i++) {
    newArr[i + 1] = arr[i];
  }

  return newArr;
}

// ---- Predefined ----
function insertAtPositionBuiltIn(arr, value, pos) {
  arr.splice(pos, 0, value);
  return arr;
}

// ===============================
// TESTING
// ===============================

let a1 = [10, 20, 30, 40];
console.log("\nInsert at Start (Brute):", insertAtStartBrute(a1, 5));

let a2 = [10, 20, 30, 40];
console.log("Insert at Start (Built-in):", insertAtStartBuiltIn(a2, 5));

let a3 = [10, 20, 30, 40];
console.log("\nInsert at End (Brute):", insertAtEndBrute(a3, 50));

let a4 = [10, 20, 30, 40];
console.log("Insert at End (Built-in):", insertAtEndBuiltIn(a4, 50));

let a5 = [10, 20, 30, 40];
console.log("\nInsert at Position 2 (Brute):", insertAtPositionBrute(a5, 25, 2));

let a6 = [10, 20, 30, 40];
console.log("Insert at Position 2 (Built-in):", insertAtPositionBuiltIn(a6, 25, 2));
