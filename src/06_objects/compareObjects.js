/**
 * Write a function that makes a deep comparison between two objects.
 * Deep Comparison: two values are only considered equal if they are the same value or are objects with the same
 * properties whose values are also equal when compared with a recursive call to deepEqual.
 * @param {*} obj1
 * @param {*} obj2
 */
function compareObjects(obj1, obj2) {
  // If both are not objects or are null, do a strict comparison
  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return obj1 === obj2
  }

  // Get the entries of both objects
  const entries1 = Object.entries(obj1)
  const entries2 = Object.entries(obj2)

  // If they don't have the same number of properties, return false
  if (entries1.length !== entries2.length) {
    return false
  }

  for (i = 0; i < entries1.length; i++) {
    const [key1, value1] = entries1[i]
    const [key2, value2] = entries2[i]

    // If the keys don't match, return false
    if (key1 !== key2) {
      return false
    }

    // Recursively compare the values
    if (!compareObjects(value1, value2)) {
      return false
    }
  }

  // If everything matches, return true
  return true
}

module.exports = compareObjects
