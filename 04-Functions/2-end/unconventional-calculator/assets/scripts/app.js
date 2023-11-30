const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput(){
    return parseInt(userInput.value);
}

function add() {

    let enteredNumber = getUserInput();
    let stringOutput = currentResult + "+" + enteredNumber;
    currentResult = currentResult + enteredNumber;
    outputResult(currentResult,  stringOutput)
}

function subtract() {
    let enteredNumber = getUserInput();
    let stringOutput = currentResult + "-" + enteredNumber;
    currentResult = currentResult - enteredNumber;
    outputResult(currentResult,  stringOutput)
}

// add( val1 , 30);

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);

// outputResult(currentResult,currentText)

// to add a click event: addBtn.addEveb=ntListener('click', add);
// to get the value from user input: userInput.value