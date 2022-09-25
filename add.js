/*function before refactoring* 
  const add = function (...nums) {
  return nums.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};
 */

// Final function after each refactoring
const add = (...nums) => nums.reduce((total, num) => total + num, 0);

module.exports = add;
