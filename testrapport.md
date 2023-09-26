# Test Report

## Test cases: ExpenseTracker Tests

| Test Name                                                      | Test result  | Type     |
|---------------------------------------------------------------|:-------:|:--------:|
| addExpense should add an expense to the list                  |    ✓    | Auto     |
| addExpense should add a new category if it does not exist     |    ✓    | Auto     |
| getExpensesByCategory should return expenses for a specific category | ✓ | Auto |
| getTotalExpenses should return the total expenses of all categories | ✓ | Auto |
| getCategoryExpenses should return the total expenses of a category | ✓ | Auto |
| getExpenseReport should return summary of all expenses for all the categories | ✓ | Auto |
| addBudget should add a budget to the list                     |    ✓    | Auto     |
| Calculate the remaining budget for a category                 |    ✓    | Auto     |
| getExpenseReport should return summary of all expenses for all the categories | ✓ | Auto |
| getBudgetReport should return budget report with remaining amounts | ✓ | Auto |
| getExpensesByDate should return expenses for a specific date  |    ✓    | Auto     |
| getExpensesByDateInterval should return expenses within a date interval | ✓ | Auto |
| removeExpense method should remove an existing expense from the list | ✓ | Auto |
| removeBudget method should remove an existing expense from the list | ✓ | Auto |

## Test cases: Budget Tests

| Test Name                                                      | Test result  | Type     |
|---------------------------------------------------------------|:-------:|:--------:|
| should create a new Budget instance                 |    ✓    | Auto     |
| should throw error for empty  name                |    ✓    | Auto     |
| should throw error for negative expense amount               |    ✓    | Auto     |

## Test cases: Category Tests
| Test Name                                                      | Test result  | Type     |
|---------------------------------------------------------------|:-------:|:--------:|
| should create a new Category instance               |    ✓    | Auto     |

## Test cases: Expense Tests
| Test Name                                                      | Test result  | Type     |
|---------------------------------------------------------------|:-------:|:--------:|
| should create a new Expense instance             |    ✓    | Auto     |
| should throw error for empty expense name            |    ✓    | Auto     |
| should throw error for negative expense amount            |    ✓    | Auto     |
| should throw error for empty expense name            |    ✓    | Auto     |

## Test Case: Draw a Bar Chart using the Chart class


I test the chart class to see if I got bar chart without syntax errors. 

Test step:
1. Define the chart data with labels and their respective values
2. Define the containerId by calling the canvas ID (barChart).
3. Call the drawBarChart() method.
4. Visually inspect the rendered chart in the browse

Actual Outcome: I got the bar chart correctly without any errors

| Test Name                                                      | Test result  | Type     |
|---------------------------------------------------------------|:-------:|:--------:|
| Draw a bar chart                  |   ✓     | Manuel     |