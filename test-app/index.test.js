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


  test('addExpense should add a new category if it does not exist', () => {
    const initialCategoryCount = tracker.getCategoryLista().length;

    tracker.addExpense('Expense 1', 50, '2023-09-15', 'New Category');
    const updatedCategoryCount = tracker.getCategoryLista().length;
    expect(updatedCategoryCount).toBe(initialCategoryCount + 1);

    const newCategoryExists = tracker.getCategoryLista().some(category => category.getName() === 'New Category');
    expect(newCategoryExists).toBe(true);
  });


  test('getExpensesByCategory should return expenses for a specific category', () => {
    // Add expenses with different categories
    tracker.addExpense('Expense 1', 50, '2023-09-15', 'Category A');
    tracker.addExpense('Expense 2', 75, '2023-09-16', 'Category B');
    tracker.addExpense('Expense 3', 60, '2023-09-17', 'Category A');
    tracker.addExpense('Expense 4', 80, '2023-09-18', 'Category C');

    const categoryAExpenses = tracker.getExpensesByCategory('Category A');
    expect(categoryAExpenses[0].getName()).toBe('Expense 1');
    expect(categoryAExpenses[1].getName()).toBe('Expense 3');
    

  });

  test('addBudget should add a budget to the list', () => {
    const initialBudgetsCount = tracker.getBudgetList().length;
    tracker.addBudget('Category A', 1000); // Add a budget for 'Category A'
    const updatedBudgetsCount = tracker.getBudgetList().length;

    expect(updatedBudgetsCount).toBe(initialBudgetsCount + 1);
  });









 
});
