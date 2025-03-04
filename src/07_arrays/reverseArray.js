/**
 * Returns a new array with the elements in reverse order
 * @example
 * reverseArray([1, 2, 3]) // => [3, 2, 1]
 * @param {Array} arr
 * @returns {Array}
 */
function reverseArray(arr) {
  // Your code here
  let reversedArr = []

  for (i = 0; i < arr.length; i++) {
    reversedArr.push(arr[arr.length - 1 - i])
  }

  return reversedArr
}

module.exports = reverseArray
