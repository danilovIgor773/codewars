import "./index.scss";

function firstNonRepeatingLetter(s) {
  let filtered = [];
  let arr = s.toLowerCase().split("");

  filtered = _filteringObj(_countRepeats(arr), value => value === 1);

  if (filtered.length === 0) {
    return "";
  } else {
    for (let i = 0; i <= filtered.length; i++) {
      return s.charAt(arr.indexOf(filtered[i]));
    }
  }
}

// function _formIndex(arr) {
//   let indexes = arr.map((item, index) => {
//     return index;
//   });
//   return indexes;
//   // let keys = arr.map(item => {
//   //   return item;
//   // });
// }

function _countRepeats(arr) {
  const distribution = arr.reduce(
    (acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
    {}
  );
  return distribution;
}

function _filteringObj(obj, predicate) {
  let resultArr = Object.keys(obj).filter(key => predicate(obj[key]));
  //.reduce((res, key) => ((res[key] = obj[key]), res), {});
  return resultArr;
}

// function _isUpperCase(str) {
//   let char = "";
//   let resultArr = [];
//   for (let i = 0; i < str.length; i++) {
//     char = str[i];
//     if (char == char.toUpperCase()) {
//       resultArr.push(char);
//     }
//   }
//   return resultArr;
// }

//console.log(_formIndex(["s", "t", "r", "e", "s", "s"]));

//console.log(_isUpperCase("STreSs"));

console.log(firstNonRepeatingLetter("sssssssssss"));

//-----alternative hardcoded version of counting repetitions in array-----------
// function count() {
//   var array_elements = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "a",
//     "b",
//     "c",
//     "f",
//     "g",
//     "h",
//     "h",
//     "h",
//     "e",
//     "a"
//   ];
//
//   array_elements.sort();
//
//   var current = null;
//   var cnt = 0;
//   for (var i = 0; i < array_elements.length; i++) {
//     if (array_elements[i] != current) {
//       if (cnt > 0) {
//         console.log(current + " comes --> " + cnt + " times<br>");
//       }
//       current = array_elements[i];
//       cnt = 1;
//     } else {
//       cnt++;
//     }
//   }
//
//   if (cnt > 0) {
//     console.log(current + " comes --> " + cnt + " times");
//   }
// }
//
// console.log(count());
