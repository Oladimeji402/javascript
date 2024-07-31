// Function to calculate BMI
function calculateBMI(mass, height) {
    return mass / (height * height);
  }
  
  // Test Data 1
  let massMark1 = 78; // kg
  let heightMark1 = 1.69; // m
  
  let massJohn1 = 92; // kg
  let heightJohn1 = 1.95; // m
  
  // Compute BMIs for Test Data 1
  let bmiMark1 = calculateBMI(massMark1, heightMark1);
  let bmiJohn1 = calculateBMI(massJohn1, heightJohn1);
  
  // Boolean to check if Mark's BMI is higher for Test Data 1
  let markHigherBMI1 = bmiMark1 > bmiJohn1;
  
  console.log(`Test Data 1 - Mark's BMI: ${bmiMark1.toFixed(2)}`);
  console.log(`Test Data 1 - John's BMI: ${bmiJohn1.toFixed(2)}`);
  console.log(`Test Data 1 - Mark has a higher BMI than John: ${markHigherBMI1}`);
  
  // Test Data 2
  let massMark2 = 95; // kg
  let heightMark2 = 1.88; // m
  
  let massJohn2 = 85; // kg
  let heightJohn2 = 1.76; // m
  
  // Compute BMIs for Test Data 2
  let bmiMark2 = calculateBMI(massMark2, heightMark2);
  let bmiJohn2 = calculateBMI(massJohn2, heightJohn2);
  
  // Boolean to check if Mark's BMI is higher for Test Data 2
  let markHigherBMI2 = bmiMark2 > bmiJohn2;
  
  console.log(`Test Data 2 - Mark's BMI: ${bmiMark2.toFixed(2)}`);
  console.log(`Test Data 2 - John's BMI: ${bmiJohn2.toFixed(2)}`);
  console.log(`Test Data 2 - Mark has a higher BMI than John: ${markHigherBMI2}`);
  