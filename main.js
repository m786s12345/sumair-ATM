#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let mypin = 4567;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Correct pin code!!!");
    let operations = await inquirer.prompt([
        {
            name: "operation",
            message: "set operation",
            type: "list",
            choices: ["withdraw", "check balance", "fastcash"],
        },
    ]);
    if (operations.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else if (myBalance -= amountAns.amount) {
            console.log(`your remaining amount is: ${myBalance}`);
        }
    }
    ;
    if (operations.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    if (operations.operation === "fastcash") {
        let fastcash = await inquirer.prompt([
            {
                name: "options",
                message: "select any amount",
                type: "list",
                choices: ["1000", "5000", "10000", "15000", "20000"],
            }
        ]);
        if (myBalance -= fastcash.options) {
            console.log(`your remaining amount is: ${myBalance}`);
        }
    }
}
else {
    console.log("incorrect pin code");
}
