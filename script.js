initialiseApp()

function validateInput(str) {
    if(str === "") {
        alert("Please provide a phone number")
        return false
    } else {
        return true
    }
}

function clearInput() {
    const inputField = document.getElementById('user-input')
    const resultDiv = document.getElementById('results-div')
    
    inputField.value = ""
    resultDiv.innerHTML = ""
}

function validateUSNumber(str) {
    return /^(1\s?)?(\d{3}|\(\d{3}\))[- ]?(\d{3})[- ]?(\d{4})$/.test(str)
}

function clickCheckButton() {
    const inputField = document.getElementById('user-input')
    const resultsDiv = document.getElementById('results-div')

    const inputValue = inputField.value

    if(validateInput(inputValue) === true) {
        if(validateUSNumber(inputValue) === true) {
            resultsDiv.innerHTML = `Valid US number: ${inputValue}`
        } else {
            resultsDiv.innerHTML = `Invalid US number: ${inputValue}`
        }
    }
}

function clickClearButton() {
    clearInput()
}

function initialiseApp() {
    const checkButton = document.getElementById('check-btn')
    const clearButton = document.getElementById('clear-btn')

    checkButton.addEventListener('click', clickCheckButton)
    clearButton.addEventListener('click', clickClearButton)
}