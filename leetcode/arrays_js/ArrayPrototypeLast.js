// 2619. Array Prototype Last
/**
 * @param {Array} arr
 * @return {Number}
 * @method last
 * @memberof Array.prototype
 * @description Returns the last element of an array.
 * @example
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 * @example
 * const arr = [];
 * arr.last(); // undefined
 * @example
 **/

Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
