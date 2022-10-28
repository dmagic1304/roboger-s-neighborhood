// Bussiness logic
function beebBoop(e) {
  e.preventDefault();
  const userInput = Number(document.querySelector('input').value);
  console.log('input value: ' + userInput);
  let outputArray = []; 

  if(!Number.isInteger(userInput) || userInput < 1) {
    console.log('Incorrect input'); //add UI function that will print to DOM
  } else {
    for(i = 0; i <= userInput; i++) {      
      outputArray.push(" " + String(i));
    }
  }  

  outputArray.forEach(function(element, index) {
    if(element.includes("3")) {
      outputArray[index] = " Won't you be my neighbor?";
    } else if(element.includes("2")) {
      outputArray[index] = " Boop!";
    } else if(element.includes("1")) {
      outputArray[index] = " Beep!";
    }
  });

  displayResult(outputArray);
}


// UI Logic

function displayResult (result) {
  const output = document.getElementById('result');
  output.innerHTML = result;
  output.removeAttribute('class');
}

window.addEventListener('load', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', beebBoop);
})