// Bussiness logic

function beebBoop(input) {
  const userInput = Number(input);
    console.log('User input: ' + userInput);
  let outputArray = [];  
  if(!Number.isInteger(userInput) || userInput < 1) {
    console.log('Incorrect input'); //add UI function that will print to DOM
  } else {
    for(i = 0; i <= userInput; i++) {
      outputArray.push(i);
      console.log('output array: ' + outputArray);
    }
  }
}