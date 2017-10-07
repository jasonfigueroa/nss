const dollarAmount = 3.33;
const piggyBank = {};

// Your magic code here
const coinValues = {
    quarters: .25,
    dimes: .1,
    nickels: .05,
    pennies: .01    
};

let total = dollarAmount;

for (key in coinValues) {
    if (total / coinValues[key] < 1) {
        continue;
    }
    let remainder = total % coinValues[key]; 
    piggyBank[key] = Math.floor(total / coinValues[key]);
    total = remainder;
}

console.log(piggyBank);
