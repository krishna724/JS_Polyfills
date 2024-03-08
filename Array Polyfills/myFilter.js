//Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
/**
 * @param {function} [sIndex] - Start index of the array to slice
 */
Array.prototype.myFilter = function (cb) {
  //Here "this" is the array which will be used to filter
  const filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      //Calling call back on each element and pushing it onto the filteredArray
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};
//Example
const arr = [4, 5, 5, 6, 8];
const filteredArray = arr.myFilter((ele, i) => ele > 5);
console.log("filteredArray", filteredArray);
//Output: [6,8]
