/**
 * Returns true if the given variable is null and typeof returns 'object'.
 *
 * @param {*} variable - The variable to be checked.
 * @returns {boolean} - True if the variable is null and typeof returns 'object'.
 */
function isNullObject(variable) {
  if (variable === null) return true

  return false
}

module.exports = isNullObject
