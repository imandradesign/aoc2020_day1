// Pull data from the inputdata.txt local file & splits each line into a separate entry in an array of integers
const fs = require('fs');
const data = fs.readFileSync('inputdata.txt', 'utf8').split('\n');
const expenses = data.map(input => parseInt(input, 10));

// IIFE to determine which 2 numbers from the array equal 2020 when added together, then multiplies them
const addsToYear = (function(){
  // Loops through expenses array 2 times so the values can be compared
  for (let i = 0; i < expenses.length; i++){
    const num = expenses[i];
    
    for (let j = 0; j < expenses.length; j++){
      const numCompare = expenses[j];
      
      // If any 2 values from the array equal 2020 when added this multiplies them and returns the value
      if (num + numCompare == 2020){
        const result = num * numCompare;
        console.log(result);
        return result;
      }
    }
  }
})();