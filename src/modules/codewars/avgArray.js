function avgArray(arr) {
  //console.log(arr);
  let newArr = [];
  let initialLenght = arr.length;
  newArr = arr.reduce((accum, current) => {
    current.forEach(function(item, index) {
      accum[index] = (accum[index] || 0) + item;
      //console.log("Accum[index]", accum[index]);
    });
    //console.log("Accum is:", accum);
    return accum;
  }, []);

  return newArr.map(item => item / initialLenght);
}

export default avgArray;
