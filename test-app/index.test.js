// ExpenseTracker.test.js

import { ExpenseTracker } from "../src/javascript/ExpenseTracker.js";


describe('ExpenseTracker', () => {
  let tracker;

  beforeEach(() => {
    tracker = new ExpenseTracker();
  });

  test('addExpense should add an expense to the list', () => {
    const initialExpensesCount = tracker.getExpensLista().length;
    tracker.addExpense('Expense 1', 50, '2023-09-15', 'Category A');
    const updatedExpensesCount = tracker.getExpensLista().length;

    expect(updatedExpensesCount).toBe(initialExpensesCount + 1);
  });


  test('addBudget should add a budget to the list', () => {
    const initialBudgetsCount = tracker.getBudgetList().length;
    tracker.addBudget('Category A', 1000); // Add a budget for 'Category A'
    const updatedBudgetsCount = tracker.getBudgetList().length;

    expect(updatedBudgetsCount).toBe(initialBudgetsCount + 1);
  });

 
});
