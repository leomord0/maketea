const { default: chalk } = require("chalk");

function hello() {
    console.log(chalk("HELLO"))
}

module.exports = hello