// Bussiness logic

function beebBoop(input) {
  const userInput = Number(input);
    console.log('User input: ' + userInput);
  let outputArray = []; 

  if(!Number.isInteger(userInput) || userInput < 1) {
    console.log('Incorrect input'); //add UI function that will print to DOM
  } else {
    for(i = 0; i <= userInput; i++) {      
      outputArray.push(" " + String(i));
    }
    console.log('output array before conversion: ' + outputArray);
  }  

  outputArray.forEach(function(element, index) {
    if(element.includes("3")) {
      outputArray[index] = " Won't you be my neighbor?"
    } else if(element.includes("2")) {
      outputArray[index] = " Boop!"
    } else if(element.includes("1")) {
      console.log('number 1 detected');
    }
    console.log('output array after conversion: ' + outputArray);
  });

}