/* eslint-disable no-undef */
// ExpenseTracker.test.js

import { ExpenseTracker } from '../src/javascript/ExpenseTracker.js'
import { Chart } from '../src/javascript/chart.js'

describe('ExpenseTracker', () => {
  let tracker

  beforeEach(() => {
    tracker = new ExpenseTracker()
  })

  test('addExpense should add an expense to the list', () => {
    const initialExpensesCount = tracker.getExpensList().length
    tracker.addExpense('Expense 1', 50, '2023-09-15', 'Category A')
    const updatedExpensesCount = tracker.getExpensList().length

    expect(updatedExpensesCount).toBe(initialExpensesCount + 1)
  })

  test('addExpense should add a new category if it does not exist', () => {
    const initialCategoryCount = tracker.getCategoryList().length

    tracker.addExpense('Expense 1', 50, '2023-09-15', 'New Category')
    const updatedCategoryCount = tracker.getCategoryList().length
    expect(updatedCategoryCount).toBe(initialCategoryCount + 1)

    const newCategoryExists = tracker.getCategoryList().some(category => category.getName() === 'New Category')
    expect(newCategoryExists).toBe(true)
  })

  test('getExpensesByCategory should return expenses for a specific category', () => {
    // Add expenses with different categories
    tracker.addExpense('Expense 1', 50, '2023-09-15', 'Category A')
    tracker.addExpense('Expense 2', 75, '2023-09-16', 'Category B')
    tracker.addExpense('Expense 3', 60, '2023-09-17', 'Category A')
    tracker.addExpense('Expense 4', 80, '2023-09-18', 'Category C')

    const categoryAExpenses = tracker.getExpensesByCategory('Category A')
    expect(categoryAExpenses[0].getName()).toBe('Expense 1')
    expect(categoryAExpenses[1].getName()).toBe('Expense 3')
  })

  test('getTotalExpenses should return the total expenses of all categories', () => {
    // Add expenses with different categories

    tracker.addExpense('Expense 1', 50, '2023-09-15', 'Category A')
    tracker.addExpense('Expense 2', 75, '2023-09-16', 'Category B')
    tracker.addExpense('Expense 3', 60, '2023-09-17', 'Category A')
    tracker.addExpense('Expense 4', 80, '2023-09-18', 'Category C')

    const categoryAExpenses = tracker.getTotalExpenses()

    expect(categoryAExpenses).toBe(265)
  })

  test('getCategoryExpenses should return the total expenses of a category', () => {
    // Add expenses with different categories

    tracker.addExpense('Expense 1', 50, '2023-09-15', 'Category A')
    tracker.addExpense('Expense 2', 75, '2023-09-16', 'Category B')
    tracker.addExpense('Expense 3', 60, '2023-09-17', 'Category A')
    tracker.addExpense('Expense 4', 80, '2023-09-18', 'Category C')

    const categoryAExpenses = tracker.getExpenesAmountByCategory('Category A')
    expect(categoryAExpenses).toBe(110)
  })

  test('getExpenseReport should return summary of all expenses for all the categories', () => {
    // Add expenses with different categories
    tracker.addExpense('Expense 1', 50, '2023-09-15', 'Category A')
    tracker.addExpense('Expense 2', 75, '2023-09-16', 'Category B')
    tracker.addExpense('Expense 3', 60, '2023-09-17', 'Category A')
    tracker.addExpense('Expense 4', 80, '2023-09-18', 'Category C')

    const categoryAExpenses = tracker.getExpenseReport()
    expect(categoryAExpenses).toEqual({
      'Category A': 110,
      'Category B': 75,
      'Category C': 80
    })
  })

  test('addBudget should add a budget to the list', () => {
    const initialBudgetsCount = tracker.getBudgetList().length
    tracker.addBudget('Category A', 1000) // Add a budget for 'Category A'
    const updatedBudgetsCount = tracker.getBudgetList().length

    expect(updatedBudgetsCount).toBe(initialBudgetsCount + 1)
  })

  test('Calculate the remaning budget for a category', () => {
    // Add expenses with different categories

    tracker.addBudget('Category A', 500)
    tracker.addExpense('Expense 1', 50, '2023-09-15', 'Category A')
    tracker.addExpense('Expense 2', 75, '2023-09-16', 'Category B')
    tracker.addExpense('Expense 3', 100, '2023-09-17', 'Category A')
    tracker.addExpense('Expense 4', 80, '2023-09-18', 'Category C')

    const remainBudget = tracker.getRemainingBudget('Category A')
    expect(remainBudget).toBe(350)

    expect(() => {
      tracker.getRemainingBudget('Category D')
    }).toThrowError('Category D does not exist in the category list')
  })

  test('getExpenseReport should return summary of all expenses for all the categories', () => {
    // Add expenses
    tracker.addExpense('Expense A', 50, '2023-09-15', 'Category A')
    tracker.addExpense('Expense B', 75, '2023-09-16', 'Category B')
    const report = tracker.getExpenseReport()
    expect(report['Category A']).toBe(50)
    expect(report['Category B']).toBe(75)
  })

  test('getBudgetReport should return budget report with remaining amounts', () => {
    tracker.addBudget('Category A', 500)
    tracker.addExpense('Expense A', 50, '2023-09-15', 'Category A')
    const report = tracker.getBudgetReport()
    expect(report['Category A'].totalBudget).toBe(500)
    expect(report['Category A'].remainingBudget).toBe(450)
  })

  test('getExpensesByDate should return expenses for a specific date', () => {
    tracker.addExpense('Expense A', 50, '2023-09-15', 'Category A')
    tracker.addExpense('Expense B', 75, '2023-09-16', 'Category B')

    const expenses = tracker.getExpensesByDate('2023-09-15')
    expect(expenses.length).toBe(1)
    expect(expenses[0].getName()).toBe('Expense A')
  })

  test('getExpensesByDateInterval should return expenses within a date interval', () => {
    tracker.addExpense('Expense A', 50, '2023-09-14', 'Category A')
    tracker.addExpense('Expense B', 75, '2023-09-15', 'Category B')
    tracker.addExpense('Expense C', 100, '2023-09-16', 'Category C')

    const expenses = tracker.getExpensesByDateInterval('2023-09-14', '2023-09-15')
    expect(expenses.length).toBe(2)
    expect(expenses[0].getName()).toBe('Expense A')
    expect(expenses[1].getName()).toBe('Expense B')
  })

  test('removeExpense method should remove an existing expense from the list', () => {
    tracker.addExpense('Expense A', 50, '2023-09-14', 'Category A')
    tracker.addExpense('Expense B', 75, '2023-09-15', 'Category B')
    tracker.addExpense('Expense C', 100, '2023-09-16', 'Category C')

    tracker.removeExpense('Expense A')
    expect(tracker.getExpensList().length).toBe(2)
  })

  test('removeBudget method should remove an existing expense from the list', () => {
    tracker.addBudget('Category A', 500)
    tracker.addBudget('Category B', 500)

    tracker.removeBudget('Category A')
    expect(tracker.getBudgetList().length).toBe(1)
  })
})

tracker.addExpense('Expense A', 50, '2023-09-14', 'Category A')
tracker.addExpense('Expense B', 75, '2023-09-15', 'Category B')
tracker.addExpense('Expense C', 100, '2023-09-16', 'Category C')

const containerId = 'barChart'
const expensesInAugust = tracker.getExpensesByDateInterval('2023-09-10', '2023-09-12')

const dateChartData = expensesInAugust.map(expense => ({
  label: expense.getName(),
  value: expense.getAmount()
}))

// Draw the chart
const dateChart = new Chart(containerId, dateChartData)
dateChart.drawBarChart()
