const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var config = {
    
}

rl.question("Do you want to install Paracord?\n> ", (answer) => {
    if(answer.toLowerCase() === 'yes') {
        console.log(chalk.green("Ayy less gooo"));
    } else if(answer.toLowerCase() === 'no'){
        console.log(chalk.red("Sed"))
    } else {
        console.log(chalk.yellow("What i d"))
    }

    rl.close();
})
