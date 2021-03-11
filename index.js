const folding = require('accent-folding');
console.log("Test accent-folding:", folding("Fulanilo López","lo","select"));

const chalk = require('chalk');
console.log(chalk.red("Test chalk: Hello world!"));

console.log(chalk.blue("Write accent folding with chalk:", folding("Fulanilo López","lo","select")))
