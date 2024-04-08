import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("***CURRENCY_CONVERTOR***"));
const Currencies = {
    USD: 1,
    PKR: 277.54,
    INR: 83.3,
    EUR: 0.92,
    AED: 3.67,
    AFN: 71.23,
    OMR: 0.38,
    QAR: 3.64,
    SAU: 3.75,
    RWF: 1285.04,
};
let userSelection = await inquirer.prompt([
    {
        name: "from",
        message: "SELECT YOUR CURRENCY WHICH YOU WANT TO CONVERT.",
        type: "list",
        choices: [
            "USD",
            "PKR",
            "INR",
            "EUR",
            "AED",
            "AFN",
            "OMR",
            "QAR",
            "SAU",
            "RWF",
        ],
    },
    {
        name: "to",
        message: "SELECT YOUR CURRUNCY IN WHICH YOU WANT TO CONVERT.",
        type: "list",
        choices: [
            "USD", // Base currency
            "PKR",
            "INR",
            "EUR",
            "AED",
            "AFN",
            "OMR",
            "QAR",
            "SAU",
            "RWF",
        ],
    },
    {
        name: "Amount",
        message: "HOW MUCH AMOUNT YOU WANT TO CONVERT.",
        type: "number",
    },
]);
let fromlist = Currencies[userSelection.from]; //PKR 277.54
let tolist = Currencies[userSelection.to]; // USD 1
let amount = userSelection.Amount; // Amount 5000
let BaseAmount = amount / fromlist; // 5000 / fromlist means 277.54
let ConvertedSAmount = BaseAmount * tolist;
console.log("Converted-Amount :", ConvertedSAmount);
