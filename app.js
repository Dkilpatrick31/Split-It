
var myInput = document.getElementById('myInput');
let ul = document.querySelector('ul');
let myButton = document.getElementById('myButton');
let resetButton = document.getElementById('resetButton');

// myGroceries Array information gets pushed into this from the myInput.value;
let myGroceries = [];

// This will create an <li> node of the input value typed into the <myInput> node.
myButton.addEventListener('click', () => {
  ul.innerHTML += myInput.value + "<br>";
  myGroceries.push(myInput.value);
  myInput.value = '';
});

// This reset button will clear out the whole list created from the values written into myInput.
resetButton.addEventListener('click', () => {
  ul.innerHTML = null;
  myGroceries.length = null;
});

console.log(myGroceries);
