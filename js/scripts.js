// Bussiness logic
function beebBoop(input) {
  e.preventDefault();
  const userInput = Number(input);
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
      outputArray[index] = " Won't you be my neighbor?";
    } else if(element.includes("2")) {
      outputArray[index] = " Boop!";
    } else if(element.includes("1")) {
      outputArray[index] = " Beep!";
    }
    console.log('output array after conversion: ' + outputArray);
  });
}


// UI Logic
window.addEventListener('load', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', beebBoop);
})