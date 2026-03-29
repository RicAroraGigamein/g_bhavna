// // function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let current = arr[i];
//         let j = i - 1;

//         // Move elements of arr[0..i-1], that are greater than current, to one position ahead
//         while (j >= 0 && arr[j] > current) {
//             arr[j + 1] = arr[j]; // Shift element to the right
//             j--;
//         }

//         arr[j + 1] = current; // Insert current into correct spot
//     }

//     return arr;
// }

// console.log(insertionSort([64,57,12,32,41,16]));

 function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

