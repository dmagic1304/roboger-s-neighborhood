// Bussiness logic
function beebBoop(e) {
  e.preventDefault();
  clearError();
  clearResult();
  const userInput = Number(document.querySelector('input').value);
  let outputArray = []; 

  if(!Number.isInteger(userInput) || userInput < 1) {    
    displayError();    
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
    displayResult(outputArray);
  });
}


// UI Logic

function displayResult(result) {
  const output = document.getElementById('result');
  const robotImg = document.getElementById('robot');
  output.innerText = result;
  output.removeAttribute('class');
  robotImg.removeAttribute('class');
}

function displayError() {
  const error = document.getElementById('error');
  const robotImg = document.getElementById('robot');
  error.removeAttribute('class');
  robotImg.removeAttribute('class');
}

function clearError() {
  const output = document.getElementById('error');
  output.setAttribute('class', 'hidden');
}

function clearResult() {
  const output = document.getElementById('result');
  output.setAttribute('class', 'hidden');
}

window.addEventListener('load', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', beebBoop);
})