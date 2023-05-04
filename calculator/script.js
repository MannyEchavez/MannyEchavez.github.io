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
  var display = document.querySelector(".result");
  var equals = document.querySelector(".equals");
  equals.style.backgroundImage = "linear-gradient(to right, #A0D0FF, #999A9B)";
  equals.style.transition = '1s';
  display.style.backgroundColor = "black";
  display.style.color = "white"
  display.style.transition = "5s;"
  calculator.style.backgroundColor = "black	";
  calculator.style.transition = '1s';
}
function light(){
  var calculator = document.querySelector(".calculator");
  var display = document.querySelector(".result");
  var equals = document.querySelector(".equals");
  equals.style.backgroundImage = "linear-gradient(to right, pink, yellow)";
  equals.style.transition = '1s';
  display.style.backgroundColor = "#ADD8E6";
  display.style.transition = "2s;"
  calculator.style.backgroundColor = "#ADD8E6";
  calculator.style.transition = '1s';
}





//Calls helper functions on press of button
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        light();
        body.style.background = 'white';
        body.style.color = 'white	';
        body.style.transition = '1s';
        
    }else{
        dark();
        body.style.background = '#282828	';
        body.style.color = 'LightGray';
        body.style.transition = '1s';
    }
});
