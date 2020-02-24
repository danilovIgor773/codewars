function amIAfraid (day, num){
  //console.log(`the day is ${day} and num is ${num}`);
  const _illnessMap = {
    Monday: num === 12,
    Tuesday: num > 95,
    Wednesday: num === 34,
    Thursday: num === 0,
    Friday: (num % 2) === 0,
    Saturday: num === 56,
    Sunday: num === 666 || num === -666
  }; 
  let result = false;

  
    if(_illnessMap.hasOwnProperty(day)){
      if(_illnessMap[day]){
        return result = true;
      }else{       
        return result;
      }
    }
  
};

export default amIAfraid;