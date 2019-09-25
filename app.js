// Selectors
let myInput = document.getElementById('myInput');
let ourInput = document.getElementById('ourInput');
let leftSideUL = document.querySelector('ul.leftSideUL');
let rightSideUL = document.querySelector('ul.rightSideUL');
let addItemLeftSide = document.getElementById('addItemLeftSide');
let addItemRightSide = document.getElementById('addItemRightSide');
let resetButtonLeftSide = document.getElementById('resetButtonLeftSide');
let resetButtonRightSide = document.getElementById('resetButtonRightSide');
let removeButtonLeftSide = document.getElementById('removeButtonLeftSide');
let removeButtonRightSide = document.getElementById('removeButtonRightSide');
let calculateButton = document.getElementById('calculateButton');
let combineButton = document.getElementById('combineButton');

// myGroceries Array information gets pushed into this from the myInput.value;
let myGroceries = [];

// myGroceries Array information gets pushed into this from the myInput.value;
let ourGroceries = [];

// This will create an <li> node of the input value typed into the <myInput> node.
addItemLeftSide.addEventListener('click', () => {
  leftSideUL.innerHTML += "<li>" + myInput.value + "<br>";
  myGroceries.push(myInput.value);
  myInput.value = '';
  // TO-DO ITEM: figure out how to keep it from creating empty li node's. Perhaps giving a gander at the myInput.value if it's '' then don't add anything?
});

// This will create an <li> node of the input value typed into the <myInput> node.
addItemRightSide.addEventListener('click', () => {
  rightSideUL.innerHTML += "<li>" + ourInput.value + "<br>";
  ourGroceries.push(ourInput.value);
  ourInput.value = '';
  // TO-DO ITEM: figure out how to keep it from creating empty li node's. Perhaps giving a gander at the myInput.value if it's '' then don't add anything?
});

// This reset button will clear out the whole list created from the values written into myInput.
resetButtonLeftSide.addEventListener('click', () => {
  leftSideUL.innerHTML = null;
  myGroceries.length = null;
});

// This reset button will clear out the whole list created from the values written into ourInput.
resetButtonRightSide.addEventListener('click', () => {
  rightSideUL.innerHTML = null;
  ourGroceries.length = null;
});

// This remove button will delete the last item pushed into the myGroceries array.
removeButtonLeftSide.addEventListener('click', () => {
  myGroceries.pop();
  // TO DO ITEM: Figure out how to remove the most recently created li node for the left side.
});

// This remove button will delete the last item pushed into the ourGroceries array.
removeButtonRightSide.addEventListener('click', () => {
  ourGroceries.pop();
  // TO DO ITEM: Figure out how to remove the most recently created li node for the right side.
});

calculateButton.addEventListener('click', () => {
  // do {
  //   ourGroceries[i] / 2;
  //   i ++;
  // } while (i)
  // Figure out this event listener
  // Find the sum of the numbers in the ourGroceries array and then divide by 2. Should be it.
});

combineButton.addEventListener('click', () => {
  // add the total of myGroceries[];
  // add the total of ourGroceries[];
  // combine the total
});

// ToDo List:
// - Add another set of buttons for the split input.
// - Add the addEventListener's for the remove buttons.

console.log(myGroceries);
