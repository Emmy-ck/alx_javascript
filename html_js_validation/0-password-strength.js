// Function to validate password
function validatePassword() {
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("error");

    // Define regular expressions for each criteria
    const minLenghRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;

    // Check each requirement
    if (!minLenghRegex.test(password)) {
        errorElement.textContent = "Password must be at least 8 characters long";
    } else if (!uppercaseRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one uppercase letter";
    } else if (!lowercaseRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one lowercase letter";
    } else if (!digitRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one numeric digit";
    } else if (!specialCharRegex.test(password)) {
        errorElement.textContent = "Password must contain at least one special character (e.g., !@#$%^&*)";
    } else {
        // Allow for submission and clear error message
        errorElement.textContent = "";
        return true;
    }
    //Prevent submission if any requirement is not met
    return false;
}

//Add an event listener to the form to call the validatePassword function on submission
document.getElementById("passwordForm").addEventListener("submit", function(event) {
    if (!validatePassword()) {
        event.preventDefault(); //Prevent form submission if validation fails
    }
});