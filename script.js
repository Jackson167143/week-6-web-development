// STEP 1: Create an array to store expense information
let expenses = [];

let income = 0;

// Select HTML elements
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


// STEP 6: Add event listener to income form
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


// STEP 6: Add event listener to expense form
expenseForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = expenseName.value;
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;

    if (name === "" || amount <= 0 || category === "") {
        alert("Please fill in all expense details.");
        return;
    }

    // Add expense record to the array
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "";

    // STEP 7: User action updates the application
    updateDashboard();
});


// STEP 2: Use a loop to calculate total expenses
function calculateTotalExpenses() {

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}


// STEP 3: Conditional logic for budgeting
function checkBudget(balanceAmount, total) {

    if (balanceAmount < 0) {

        return "Warning: Your expenses are higher than your income.";

    } else if (balanceAmount === 0) {

        return "Your income and expenses are equal.";

    } else if (total > income * 0.8) {

        return "Be careful: You have used more than 80% of your income.";

    } else {

        return "Good job! You are currently within your budget.";
    }
}


// STEP 4: Update the SpendWise dashboard
function updateDashboard() {

    const total = calculateTotalExpenses();

    const currentBalance = income - total;

    // STEP 5: Update HTML content dynamically
    totalIncome.textContent =
        "KSh " + income.toLocaleString();

    totalExpenses.textContent =
        "KSh " + total.toLocaleString();

    balance.textContent =
        "KSh " + currentBalance.toLocaleString();

    // Display budget message
    budgetMessage.textContent =
        checkBudget(currentBalance, total);

    // Display expense records
    displayExpenses();
}


// STEP 2: Loop through expenses and generate output
function displayExpenses() {

    expenseList.innerHTML = "";

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


// STEP 8: Test the application
updateDashboard();