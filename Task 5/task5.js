var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Please enter a number:", function(userNumber) {
    if ((userNumber % 2) == 1) {
        console.log("Odd number");
    }
    else if ((userNumber % 2) == 0) {
        console.log("Even number");
    }
    else {
        console.log("Please try again");
    }
})
