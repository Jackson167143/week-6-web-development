# SpendWise - Interactive Budget Tracker

## Project Description

SpendWise is a personal budgeting application that helps users track their income and expenses. The project uses HTML, CSS, and JavaScript to create an interactive budget tracker.

This week's update focuses on making SpendWise interactive by using JavaScript decision-making, arrays, loops, DOM manipulation, and event listeners.

## Features

* Add income amounts
* Add expense records
* Select expense categories
* Store multiple expenses using an array
* Calculate total expenses automatically
* Calculate the remaining balance
* Display expenses dynamically in a table
* Provide budget feedback based on spending
* Respond to user form submissions
* Update the dashboard automatically

## Technologies Used

* HTML5
* CSS3
* JavaScript

## JavaScript Concepts Demonstrated

### 1. Conditional Statements

SpendWise uses `if`, `else if`, and `else` statements to evaluate the user's budget.

For example, the application checks whether:

* Expenses are higher than income
* Income and expenses are equal
* More than 80% of income has been spent
* The user is still within the budget

### 2. Arrays

An array is used to store multiple expense records.

```javascript
let expenses = [];
```

Each expense is stored as an object containing:

* Expense name
* Amount
* Category

### 3. Loops

`for` loops are used to process the stored expense records and calculate the total expenses.

```javascript
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}
```

### 4. DOM Manipulation

JavaScript updates the webpage dynamically using DOM manipulation.

The dashboard displays:

* Total income
* Total expenses
* Current balance
* Budget feedback
* Expense records

### 5. Event Listeners

Event listeners allow the application to respond when users submit the income or expense forms.

```javascript
incomeForm.addEventListener("submit", function(event) {
    event.preventDefault();
});
```

## Project Structure

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

Contains the structure of the SpendWise application, including the dashboard, forms, and expense table.

### style.css

Contains the styling and visual design of the application.

### script.js

Contains the JavaScript functionality, including arrays, conditions, loops, DOM manipulation, calculations, and event listeners.

### README.md

Contains information about the project, its features, technologies, and JavaScript concepts used.

## How to Run the Project

1. Download or clone the SpendWise project.
2. Open the project folder.
3. Make sure `index.html`, `style.css`, and `script.js` are in the same folder.
4. Open `index.html` in a web browser.
5. Enter an income amount.
6. Add different expenses.
7. The dashboard will automatically update.

## Example

If the user enters:

```text
Income: KSh 20,000

Food: KSh 3,000
Transport: KSh 2,000
Rent: KSh 8,000
```

SpendWise calculates:

```text
Total Income: KSh 20,000
Total Expenses: KSh 13,000
Balance: KSh 7,000
```

The expenses are also displayed automatically in the expense table.

## Learning Outcome

Through this project, I demonstrated how JavaScript can be used to make a webpage interactive. I learned how to use conditional statements, arrays, loops, DOM manipulation, functions, calculations, and event listeners to build a functional budgeting application.

## Author

**Lemuya Jackson**

**Project:** SpendWise - Interactive Budget Tracker
