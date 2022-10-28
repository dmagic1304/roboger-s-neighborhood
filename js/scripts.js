// Bussiness logic

function beebBoop(input) {
  const userInput = Number(input);
    console.log('input ' + userInput);
  if(!Number.isInteger(userInput)) {
    console.log('pelase enter a whole number');
  }
}