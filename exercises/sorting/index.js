// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
let arr = [12, 52, 34, 1, 8, 0];
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}
console.log(selectionSort(arr));


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin])
                indexOfMin = j;
        }
        if (arr[indexOfMin] < arr[i]) { // or if(indexOfMin !== i){}
            let temp = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1)
        return arr;
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
        if (left[0] < right[0])
            result.push(left.shift());
        else
            result.push(right.shift());
    }
    return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
