import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.80,
    PKR: 278.25,
    IND: 83.64,
    AED: 3.67,
};
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        message: "Enter from amount",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "PKR",
            "IND",
            "AED",
        ]
    }, {
        name: "to",
        type: "list",
        message: "Enter to amount",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "PKR",
            "IND",
            "AED",
        ]
    }, {
        name: "amount",
        type: "number",
        message: "Enter convert amount"
    }
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertAmount = baseAmount * toAmount;
console.log(answer);
console.log(convertAmount);
