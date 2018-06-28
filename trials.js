// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map

phoneNumbers.set("home", "510-879-5309");
phoneNumbers.set("mobile", "425-555-1212");
phoneNumbers.set("business", "415-123-4567");


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo(name, num, business){
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${num}`);
    console.log(`Business Name: ${business}`);
}


// Add function to print all addresses, including a header
function printAddresses(addresses){
    console.log("Addresses:");
    for (let address of addresses) {
        console.log(address);
    }
}


// Add function to print phone types and numbers

function printPhoneNumbers(phoneNums){
    console.log("Phone Numbers:");
    for (let num of phoneNums){
        console.log(`${num[0]}: ${num[1]}`);
    }
}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions

const accountTransactions = new Map();


// Add function to add transactions

function addTransaction(date, amount){
    accountTransactions.set(date,amount);
}


// Use the function to add transactions
addTransaction("May-2", -500);
addTransaction("May-13", 1200);
addTransaction("May-15", -100);
addTransaction("May-21", -359);
addTransaction("May-29", 2200);


// Add function to show balance status

function showBalanceStatus(balance){
    console.log(`Balance: ${balance}`);
    if (balance < 0){
        console.log("YOU ARE OVERDRAWN");
    } else if (balance < 20){
        console.log("Warning: You are close to zero balance ");
    } else {
        console.log("Thank you for your business");
    }
}

// Add function to show transactions

function showTransactions(transactions,balance){
    console.log(`Starting balance: ${balance}`);
    for (let transaction of transactions){
        balance = balance + transaction[1];
        if (balance < 0){
            balance -= 25;
        }
        let transType;
        if (transaction[1] < 0) {
            transType = "Withdrawal";
        } else {
            transType = "Deposit";
        }
        console.log(`Transaction date: ${transaction[0]}, Transaction Type: ${transType}, Amount changed: ${transaction[1]}, Balance: ${balance} `);

    }
    showBalanceStatus(balance);        
}


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info

const customerObj={
    "Account Holder": accountHolder,
    "Account Number": accountNumber,
    "Business Name": businessName,
    "Addresses": addresses,
    "Phone Numbers": phoneNumbers,
    "Transactions": accountTransactions,
    "Starting Balance": 26000
};



// Function to add customer attributes

function addCustomerInfo(melon="Cantaloupe",pets=0, customer){
    customer["Favorite Melon"] = melon;
    customer["Number of Pets"] = pets;
}

// Add attributes for this user

addCustomerInfo("Casaba", 2, customerObj);

// // ///////////////////////////////////////////////////////
// // Getting a Business Loan


// Function to return loan rate
function calculateLoanRate(income, customer){
    if(income < 100000){
        if (customer["Favorite Melon"] === "Casaba" || customer["Number of Pets"] > 5){
            return "5%";
        }
        return "8%";
    } else if (income < 200000) {
        if (customer["Favorite Melon"] === "Casaba" || customer["Number of Pets"] > 5){
            return "4%";
        }
        return "7%";
    } else {
        return "4%";
    }
}
    


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report
function showCustomerReport(customer){
    console.log(`Customer Name: ${customer["Account Holder"]}`);
    printPhoneNumbers(customer["Phone Numbers"]);
    showTransactions(customer["Transactions"], customer["Starting Balance"]);
    if (customer["Favorite Melon"] === "Casaba" || customer["Number of Pets"] > 5){
        console.log("Congratulations on being a premiere customer!");
    } else {
        console.log("Thank you for being a valued customer!");
    }
}



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses
const customerAddresses = new Map([
    ["Mel Melitipolski", "707 Birch Street"],
    ["Barbara Brown", "8997 Jones Street"]
    ]);


// Write a function to return the address of a given person

function getCustomerAddress(customer){
    return customerAddresses[customer];
}


// Add a function to create an employee schedule for the week 

function assignSchedule(employees){
    let schedule = new Map([
        ["Monday", "???"],
        ["Tuesday", "???"],
        ["Wednesday", "???"],
        ["Thursday", "???"],
        ["Friday", "???"],
        ["Saturday", "???"],
        ["Sunday", "???"]
    ]);

    let numEmployees = employees.length;

    for (let day of schedule){
        let index = Math.floor(Math.random() * numEmployees);
        schedule.set(day[0],employees[index]);
    }

    return schedule;
}


// Add a function for weekly hours

function decideHours(){
    let startHour = Math.floor(Math.random()*16);
    //returns hour in military time (from 0 to 15)
    let endHour = startHour + 9;
    let startString = `${startHour}AM`;
    let endString = `${endHour}AM`;

    if (startHour === 0){
        startString = "12AM";
    } else if (startHour > 12){
        startString = `${startHour-12}PM`;
    }
    if (endHour > 12){
        endString = `${endString-12}PM`;
    }
    return startString + "-" + endString;
}

function decideWeeklyHours(){
    let schedule = new Map([
        ["Monday", "???"],
        ["Tuesday", "???"],
        ["Wednesday", "???"],
        ["Thursday", "???"],
        ["Friday", "???"],
        ["Saturday", "???"]
    ]);
    // days = Array.from(schedule.keys());
    for (let day of schedule){
        let prevTime;
        if (day[0] === "Monday"){
            let hours = decideHours();
            schedule.set(day[0],hours);
            prevTime = hours;
        } else {
           let hours = decideHours()
            while (hours !== prevTime){
                hours = decideHours();
            }
            prevTime = hours;
            schedule.set(day[0], hours);
        }

        // if (i === 0 || i === 6){
        //     schedule.set(days[i],decideHours());
        // } else if (i=== 6){
        //     let hours = decideHours();
        //     while (hours !== schedule[days[i-1]]){
        //         hours = decideHours;
        //     }
        //     schedule.set(days[i], hours);
        // } else {
        //     let hours = decideHours()
        // }
    }
    return schedule;
}




