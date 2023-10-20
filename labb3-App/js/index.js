import { ExpenseTracker } from '../../src/javascript/ExpenseTracker.js'
import { ExpenseForm } from './ExpenseForm.js'
import { ExpenseDisplay } from './ExpenseDisplay.js'

document.addEventListener('DOMContentLoaded', () => {
  const expenseTracker = new ExpenseTracker();
  const expenseForm = new ExpenseForm(expenseTracker);
  expenseForm.registerEventHandlers()
  

  // any other initialization or event listeners
});
