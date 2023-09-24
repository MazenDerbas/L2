# Expense Tracker Module

The Expense Tracker Module is a tool to help users manage their expenses, budgets.

## Description
Managing expenses is a hard task for many people. The Expense Tracker Module simplifies this process by offering a set of classes that allow you to add individual expens and manage and organize them. And keep tracking the your budget


## Features
- **Expense Management**: Easily add and store individual expenses with its information
- **Category Organization**: Create and manage expense categories to classify and group expenses according to your needs.
- **Budget Tracking**: Set budgets for different spending categories, helping you stay within financial limits.



## Code Example

```javascript

//Add expense and budget
const tracker = new ExpenseTracker ();
tracker.addExpense("Lunch",   25 , "2023-09-10", "Food" );
tracker.addExpense("train",   30 , "2023-09-11", "Transport");

tracker.addBudget("Food", "500")

console.log(tracker.getRemainingBudget('Food'))
console.log(tracker.getBudgetReport())
console.log(tracker.getExpenseReport())
```

```javascript
//Add a bar chart
const containerId = 'barChart';
const expensesInAugust = tracker.getExpensesByDateInterval('2023-09-10', '2023-09-11');

const dateChartData = expensesInAugust.map(expense => ({
    label: expense.getName(),
    value: expense.getAmount()
}));

// Draw the chart
const dateChart = new Chart(containerId, dateChartData);
dateChart.drawBarChart();
```

## Installation

## Test

Run the built in unit tests with:
```bash
npm test
```
