let result = "";


//appends characters to screen
//Example: button 1 is pressed, then button + is pressed, then button 1 is pressed again
//Display will show 1+1
function addToResult(value) {
  if (value === "+/-") {
    // Check if the current value is negative
    if (result.startsWith("-")) {
      result = result.slice(1); // Remove the negative sign
    } else {
      result = "-" + result; // Add a negative sign
    }
  } else {
    result += value; // Append the value
  }
  document.getElementById("result").value = result;
}

//clear result screen
function clearResult() {
  result = "";
  document.getElementById("result").value = result;
}


//calculates input
function calculateResult() {
    result = eval(result);
    document.getElementById("result").value = result;

}


//dark and light mode helper functions
function dark() {
  var calculator = document.querySelector(".calculator");
  calculator.style.backgroundColor = "#101010	";
  calculator.style.transition = '2s';
}
function light(){
  var calculator = document.querySelector(".calculator");
  calculator.style.backgroundColor = "#D3D3D3	";
  calculator.style.transition = '2s';
}





//Calls helper functions on press of button
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        light();
        body.style.background = '#C0C0C0	';
        body.style.color = '#C0C0C0	';
        body.style.transition = '2s';
        
    }else{
        dark();
        body.style.background = '#282828	';
        body.style.color = 'LightGray';
        body.style.transition = '2s';
    }
});
