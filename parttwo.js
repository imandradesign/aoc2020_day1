// Pull data from the inputdata.txt local file & splits each line into a separate entry in an array of integers
const fs = require('fs');
const data = fs.readFileSync('inputdata.txt', "utf8").split('\n');
const expenses = data.map(input => parseInt(input, 10));

// IIFE function to determine which 3 numbers from the array equal 2020 when added together, then multiplies them
const addsToYear = function(){
  // Loops through expenses array 3 times so the values can be compared
  for (let i = 0; i < expenses.length; i++){
    const numOne = expenses[i];
    
    for (let j = 0; j < expenses.length; j++){
      const numTwo = expenses[j];
      
      for (let k = 0; k < expenses.length; k++){
        const numThree = expenses[k];
        
        // If any 3 values from the array equal 2020 when added this multiplies them and returns the value
        if (numOne + numTwo + numThree == 2020){
          const result = numOne * numTwo * numThree;
          console.log(result);
          return result;
        }
      }
    }
  }
};

addsToYear();