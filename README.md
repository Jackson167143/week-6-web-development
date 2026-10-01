# SpendWise - Interactive Budget Tracker

## Project Overview

SpendWise is an interactive personal budget tracking application built using HTML, CSS, and JavaScript.

The application allows users to add income and expenses, calculate totals, monitor their remaining balance, and receive feedback about their spending.

This project demonstrates how JavaScript can be used to make a webpage interactive by working with arrays, loops, conditional statements, DOM manipulation, and event listeners.

## Technologies Used

* HTML5
* CSS3
* JavaScript
* GitHub

## Assignment Implementation

### Step 1: Store Expense Information

An array is used to store multiple expense records.

```javascript
let expenses = [];
```

Each expense contains:

* Expense name
* Amount
* Category

Example:

```javascript
expenses.push({
    name: name,
    amount: amount,
    category: category
});
```

### Step 2: Process Records Using Loops

A `for` loop is used to process all stored expenses and calculate the total amount spent.

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

Another loop is used to display all expense records in the table.

### Step 3: Use Conditional Logic

Conditional statements are used to evaluate the user's budgeting situation.

The application checks whether:

* Expenses are higher than income.
* Income and expenses are equal.
* More than 80% of income has been spent.
* The user is still within the budget.

Example:

```javascript
if (balanceAmount < 0) {
    return "Warning: Your expenses are higher than your income.";
} else if (balanceAmount === 0) {
    return "Your income and expenses are equal.";
} else if (total > income * 0.8) {
    return "Be careful: You have used more than 80% of your income.";
} else {
    return "Good job! You are currently within your budget.";
}
```

### Step 4: DOM Manipulation

DOM manipulation is used to update information directly on the SpendWise webpage.

The application dynamically displays:

* Total income
* Total expenses
* Remaining balance
* Budget messages
* Expense records

### Step 5: Select and Update HTML Elements

JavaScript selects HTML elements using `getElementById()`.

```javascript
const totalIncome = document.getElementById("totalIncome");
const totalExpenses = document.getElementById("totalExpenses");
const balance = document.getElementById("balance");
```

The content is then updated dynamically using `textContent`.

```javascript
totalIncome.textContent = "KSh " + income.toLocaleString();
totalExpenses.textContent = "KSh " + total.toLocaleString();
balance.textContent = "KSh " + currentBalance.toLocaleString();
```

### Step 6: Event Listeners

Event listeners are used to respond to user actions.

For example, the expense form listens for a submit event:

```javascript
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Process expense
});
```

The income form also uses an event listener.

### Step 7: Connect User Actions to Updates

When a user submits an income or expense:

1. JavaScript receives the user's input.
2. The data is stored or updated.
3. Calculations are performed.
4. The dashboard is updated.
5. The expense table is updated.
6. The user receives budget feedback.

This creates a complete flow between user actions, JavaScript logic, stored data, and the webpage.

## Features

* Add income
* Add multiple expenses
* Select expense categories
* Store expenses in an array
* Calculate total expenses
* Calculate remaining balance
* Display expenses in a table
* Provide budget feedback
* Update the dashboard dynamically
* Respond to user form submissions

## Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the SpendWise application, including forms, dashboard cards, and the expense table.

### `style.css`

Contains the styling and visual design of the application.

### `script.js`

Contains the JavaScript functionality, including arrays, loops, conditional statements, DOM manipulation, calculations, functions, and event listeners.

### `README.md`

Provides documentation about the project and explains how the JavaScript concepts were implemented.

## Testing

The application was tested by:

1. Adding an income amount.
2. Adding multiple expenses.
3. Checking that expenses were stored correctly.
4. Checking that total expenses were calculated correctly.
5. Checking that the remaining balance was updated.
6. Checking that expense records appeared in the table.
7. Checking that budget messages changed according to spending.
8. Confirming that the forms responded correctly to user actions.

## Example

If the user enters:

```text
Income: KSh 20,000

Food: KSh 3,000
Transport: KSh 2,000
Rent: KSh 8,000
```

The dashboard calculates:

```text
Total Income: KSh 20,000
Total Expenses: KSh 13,000
Balance: KSh 7,000
```

The expenses are also displayed dynamically in the expense table.

## Success Criteria

The project meets the assignment requirements by demonstrating:

* Arrays used to store expense data.
* Loops used to process expense records.
* Conditional statements used to evaluate budget situations.
* DOM manipulation used to update the dashboard.
* Event listeners used to respond to user actions.
* Dynamic display of information on the webpage.
* Interaction between user actions, application data, and visual elements.
* Project files organized and pushed to GitHub.

## Author

**Lemuya Jackson**

## Project Name

**SpendWise - Interactive Budget Tracker**
