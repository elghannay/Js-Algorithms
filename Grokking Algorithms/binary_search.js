// return the index of the element or null if not found.

function binarySearch(sortedArray, element) {
  let low = 0;
  let high = sortedArray.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = sortedArray[mid];
    if (element < guess) low = mid + 1;
    else high = mid - 1;
    if (element === guess) return mid;
  }
  return null;
}
const my_list = [1, 3, 5, 7, 9];
console.log(binarySearch(my_list, 3));
