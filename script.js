// Store income
let income = 0;

// Store expenses using an array
let expenses = [];

// Get elements from the webpage
const incomeForm = document.getElementById("incomeForm");
const expenseForm = document.getElementById("expenseForm");

const incomeAmount = document.getElementById("incomeAmount");

const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const totalIncome = document.getElementById("totalIncome");
const totalExpenses = document.getElementById("totalExpenses");
const balance = document.getElementById("balance");

const expenseList = document.getElementById("expenseList");
const budgetMessage = document.getElementById("budgetMessage");


// Add income
incomeForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const amount = Number(incomeAmount.value);

    if (amount <= 0) {
        alert("Please enter a valid income amount.");
        return;
    }

    income += amount;

    incomeAmount.value = "";

    updateDashboard();
});


// Add expense
expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    if (name === "" || amount <= 0 || category === "") {
        alert("Please fill in all expense details.");
        return;
    }

    // Create an expense record
    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    // Add expense to the array
    expenses.push(expense);

    // Clear form
    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "";

    // Update dashboard
    updateDashboard();
});


// Calculate total expenses
function calculateTotalExpenses() {

    let total = 0;

    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// Update dashboard
function updateDashboard() {

    const total = calculateTotalExpenses();
    const currentBalance = income - total;

    // Update dashboard values
    totalIncome.textContent = "KSh " + income.toLocaleString();
    totalExpenses.textContent = "KSh " + total.toLocaleString();
    balance.textContent = "KSh " + currentBalance.toLocaleString();

    // Display budget feedback
    if (currentBalance < 0) {

        budgetMessage.textContent =
            "Warning: Your expenses are higher than your income.";

    } else if (currentBalance === 0) {

        budgetMessage.textContent =
            "Your income and expenses are equal.";

    } else if (total > income * 0.8) {

        budgetMessage.textContent =
            "Be careful: You have used more than 80% of your income.";

    } else {

        budgetMessage.textContent =
            "Good job! You are currently within your budget.";
    }

    // Display expenses
    displayExpenses();
}


// Display expenses on the webpage
function displayExpenses() {

    // Clear existing records
    expenseList.innerHTML = "";

    // Loop through the expense array
    for (let i = 0; i < expenses.length; i++) {

        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = expenses[i].name;

        const amountCell = document.createElement("td");
        amountCell.textContent =
            "KSh " + expenses[i].amount.toLocaleString();

        const categoryCell = document.createElement("td");
        categoryCell.textContent = expenses[i].category;

        row.appendChild(nameCell);
        row.appendChild(amountCell);
        row.appendChild(categoryCell);

        expenseList.appendChild(row);
    }
}


// Display the initial dashboard
updateDashboard();