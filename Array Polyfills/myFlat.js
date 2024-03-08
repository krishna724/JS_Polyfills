//Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
/**
 * @param {number} [depth] - To which depth  the array should be flattened
 */
Array.prototype.myFlatten = function(depth = 1) {
    if(depth === 0) return this;// Base condition
    else{
        let newArr = [];
        for(let i = 0; i < this.length; i++){
            if(Array.isArray(this[i])){
                //If the element is an arraythen call the myFlatten again recursively
                let arr1 =  this[i].myFlatten(depth  - 1);
                newArr = [...newArr, ...arr1];
            }else{
                newArr.push(this[i]);
            }
        }
        return newArr;
    }
}
//Examples
const arr = [1,2,[1,2,[2,3,4,[43,434,343]]]];
console.log(arr.myFlatten(3));