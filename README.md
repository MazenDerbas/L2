# Expense Tracker Module

The Expense Tracker Module is a tool to help users manage their expenses, budgets.

## Description
Managing expenses is a hard task for many people. The Expense Tracker Module simplifies this process by offering a set of classes that allow you to add individual expens and manage and organize them. And keep tracking the your budget


## Features
- **Expense Management**: Easily add and store individual expenses with its information
- **Category Organization**: Create and manage expense categories to classify and group expenses according to your needs.
- **Budget Tracking**: Set budgets for different spending categories, helping you stay within financial limits.
- **Visualization**: Use the built-in charting feature to visualize your expenses and budget on a canvas.



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

3. Install the required dependencies using ```npm i @mazenderbas/l2```

## Bug Reports/Issues
For bug reports or any other issues, please open an issue on ```https://github.com/MazenDerbas/L2/issues```
## Test

Run the built in unit tests with:
```bash
npm test
```
## Version 
1.1

## License 
[MIT](./LICENSE)

## Contributing
You are welcome to contribuet to improve the module. you can start by opening an issue with your ideas. 