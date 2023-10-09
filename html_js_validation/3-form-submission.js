//Function to handle form submission and perform validation
function handleFormSubmit(event) {
    event.preventDefault(); // Prevents form submission behaviour

    // Retrieve form field values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Retrieve the error message element
    const errorElement = document.getElementById('error');

    // Validate the name and email fields
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
        errorElement.textContent = 'Please fill in all required fields.';
        return; // Stop excecution of validation fails
    }
    // Clear any previous error messages
    errorElement.textContent = '';

    // If all validations pass, display a success message
    const successElement = document.getElementById('success');
    successElement.textContent = 'Form submitted successfully!';
}

// Add event listener to the form to call the handleFormSubmit function
document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);