console.log("Start of the execution queue");

// Use setTimeout with 0ms delay for the final code block
setTimeout(function() {
  console.log("Final code block to be executed");
}, 0);

// Use a loop to log numbers 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of the loop printing");