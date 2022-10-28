// Bussiness logic

function beebBoop(input) {
  const userInput = Number(input);
    console.log('input ' + userInput);
  if(!Number.isInteger(userInput) || userInput < 1) {
    console.log('please enter a number bigger than 0'); //needs to print out to DOM once completed
  }
}