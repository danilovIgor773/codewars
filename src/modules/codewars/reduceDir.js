function reduceDir(arr) {
  const objMap = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST"
  };
  //["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
  let state = false;
  for (var i = 0; i < arr.length; i++) {
    if (objMap[arr[i]] === arr[i + 1]) {
      arr.splice(i, 2);
      state = true;
    }
  }

  if (state) {
    return reduceDir(arr);
  } else {
    return arr;
  }
}

export default reduceDir;
