function nextBigger(n) {
  let arrayOfDigits = n.toString().split('').map(item => Number(item));
  let pivotIndex = -1;
  let rightSide = [];
  let pivotValue = null;
  //finding pivot
  for(let i = arrayOfDigits.length -1; i > 0; i--){
    //console.log(arrayOfDigits[i-1]);
    if(arrayOfDigits[i] > arrayOfDigits[i-1]){
      pivotIndex = i-1;      
      break;
    }
  }
  pivotIndex = pivotIndex === -1 ? -1 : pivotIndex; //check if we are not able to find pivotIndex

  //retrieving rightSide
  rightSide = arrayOfDigits.splice(pivotIndex);
  pivotValue = rightSide.splice(0, 1)[0];

  // find the closest value to the Pivot in rightSide arr;
  let closest = rightSide.reduce((acc, current) =>{
    return (Math.abs(current - pivotValue) < Math.abs(acc - pivotValue) ? current : acc);      
  }, 0);

  let closestIndex = rightSide.indexOf(closest);

  closestIndex = closestIndex === null ? -1 : closestIndex; // check if the index doesnt exist

  //retrieve the closest num from rightSide arr
  let _retrievedClosestArr = rightSide.splice(closestIndex, 1);

  rightSide.push(pivotValue); // pushing pivotVal
  rightSide.sort(); //sorting rightSide arr

  //joining stuff..
  let result = [...arrayOfDigits, ..._retrievedClosestArr, ...rightSide].join('');

  result = Number(result);
  
  return result = result > n ? result : -1;

}

// function _getTwoLastElements (arr) {
//   let removed = []; 
//   let result = 0;
//   if(arr.length === 2){
//     result = arr[1] > arr[0] ? arr.reverse().join('') : -1;
//     result = Number(result);
//   }else if(arr.length > 2){
//     //get two last elements of array
//     //check if last one is bigger than first one
//     //if true replace them, then join with other elements of target array, convert to number, check if initial number is bigger than result num
    
//   }
//   return result;
// }

// function _recursive(arr) {
//   let tempArr = arr.slice();
//   let removed = [];
//   let initialNumber = arr.join('');
//   initialNumber = Number(initialNumber);

//   if(tempArr.length <3){
//     return;
//   }else{
//     while(tempArr.length){
//       if(tempArr.length === 0){
//         break;
//       }
//       removed = tempArr.splice(-2, 2);
//       if(removed[1] > removed[0]){
//         removed.reverse();
//         removed = [...tempArr, ...removed].join('');
//         removed = Number(removed);
//       }
//       if(removed > initialNumber){
//         break;
//       }
//     }
    
//   }
//   return removed;
// }

// function _getArrOfDiggits(n) {
//   let arr = n.toString().split("");
//   return arr.map(item => Number(item));
// }

// //function

// function _allEqual(arr) {
//   let _equal = arr.every(element => element === arr[0]);
//   return _equal;
// }

export default nextBigger;

