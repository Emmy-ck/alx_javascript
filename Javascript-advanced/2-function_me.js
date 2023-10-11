// Closure

function welcomeMessage(fullName) {
    return function () {
        alert('Welcome ' + fullName);
    };
}

// Creating 3 variables with different names

var guillaume = welcomeMessage('Guillaume');
var alex = welcomeMessage('Alex');
var fred = welcomeMessage('Fred');