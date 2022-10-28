// Bussiness logic

function beebBoop(input) {
  const userInput = Number(input);
    console.log('User input: ' + userInput);
  let outputArray = []; 

  if(!Number.isInteger(userInput) || userInput < 1) {
    console.log('Incorrect input'); //add UI function that will print to DOM
  } else {
    for(i = 0; i <= userInput; i++) {      
      outputArray.push(String(i));
    }
    console.log('output array: ' + outputArray);
  }  

  outputArray.forEach(function(element) {
    if(element.includes("3")) {
      console.log('number 3 detected');
    } else if(element.includes("2")) {
      console.log('number 2 detected');
    } else if(element.includes("1")) {
      console.log('number 1 detected');
    }
  });

}