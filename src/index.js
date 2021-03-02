const { diff } = require("semver");

module.exports = function check(str, bracketsConfig) {
  // we convert str into array
  const strArr = [...str.split("")];
  // we create 2 empty arrays for opening and closing brackets
  let openBr = [];
  let closBr = [];

  // we check bracketsConfig array's each item
  // starting from item at 0 index we put each second item
  // into opening array, others into closing array
  bracketsConfig.map((item) =>
    item.map((br, i) =>
      i % 2 === 0
        ? (openBr = [...openBr, ...br])
        : (closBr = [...closBr, ...br])
    )
  );

  // we create empty array for non-matching brackets
  // in comparison to closing and opening brackets
  let arr = [];

  // and put into it every bracket from string to check
  // by mapping strArr and checking if it in correspondence with if

  strArr.map((el) => {
    
    // whether there is the bracket from string at the opening brackets array
    if (openBr.indexOf(el) !== -1) {
      // if any bracket from closing array at opening array index
      // with same index as the bracket in string array
      // is equal to the same bracket at string array
      // then we delete this bracket from the end of arr

      if (arr[arr.length - 1] === el && closBr[openBr.indexOf(el)] === el) {
        return arr.pop();
      } else {
        // otherwise we add bracket into arr with non-matching brackets
         return arr = [...arr, ...el];
      }
    // if no  bracket from string at the opening brackets array
    // then we check if  last element in non-matching brackets array
    // is the same as element in opening brackets arr at the position
    // of same element in closing array at the index of this bracket from string array
    // and we delete it then
    } if (openBr[closBr.indexOf(el)] === arr[arr.length - 1]) {
       return arr.pop();
    }
    // we return array with non-matching brackets
    return arr;
  });

  // console.log("Result", str.length % 2 !== 0 ? false : arr.length === 0);
  // at the end we return result if string has pairs of brackets and 
  // array with non-matching brackets is empty, then result returns true
  // otherwise result is false
 return str.length % 2 !== 0 ? false : arr.length === 0; 
};
