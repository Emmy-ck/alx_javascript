//Function to generate input fields dynamically
function generateInputFields(selectedValue) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ""; //Clear any existing input fields

    for (let i = 1; i <= selectedValue; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputContainer.appendChild(inputField);
    }
}
//Function to validate form
function validateForm() {
    const selectedValue = document.getElementById('numFields').value;
    const inputContainer = document.getElementById('inputContainer');
    const inputField = inputContainer.getElementsByTagName('input');

    for (let i = 0; i < inputField.length; i++) {
        if (inputField[i].value.trim() === '') {
            alert('Please fill in all fields.');
            return false; //Prevents form submission
        }
    }
    return true; //Allow form submission if all fields are filled
}

//Event listener to handle dropdown selection change
document.getElementById('numFields').addEventListener('change', function () {
    const selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
});
//Event listener to handle form submission
document.getElementById('dynamicForm').addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
//Initialize the form with one input field default
generateInputFields(1);