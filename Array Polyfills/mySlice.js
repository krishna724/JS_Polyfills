//Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
/**
 * @param {number} [sIndex] - Start index of the array to slice
 * @param {number} [eIndex=1] - End index of the array to slice
 */
Array.prototype.mySlice = function (sIndex, eIndex) {
  //Here "this" is the array which will be used to filter
  let slicedArray = [];
  for (let i = sIndex; i < eIndex; i++) {
    slicedArray.push(this[i]);
  }
  return slicedArray;
};
const arr = [4, 5, 5, 6, 8];
const slicedArray = arr.mySlice(1, 4);
console.log(slicedArray, arr);
