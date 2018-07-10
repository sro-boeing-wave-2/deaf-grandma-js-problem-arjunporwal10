/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The strifng to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  if (s === s.toUpperCase()) {
    return true;
  }
  return false;
};
module.exports = isUppercase;
