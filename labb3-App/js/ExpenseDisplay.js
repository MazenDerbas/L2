import { ExpenseTracker } from '../../src/javascript/ExpenseTracker.js'

/**
 *
 */
export class ExpenseDisplay {
  /**
   *
   * @param expenseTracker
   */
  constructor (expenseTracker) {
    this.expenseTracker = expenseTracker
    this.expenseContainer = document.getElementById('expenseContainer')
  }

  /**
   *
   */
  displayExpenses () {
    this.clearExpenses()
    const expenses = this.expenseTracker.getExpensList()
    expenses.forEach(expense => this.displaySingleExpense(expense))
  }

  /**
   *
   */
  clearExpenses () {
    this.expenseContainer.innerHTML = ''
  }

  /**
   *
   * @param expense
   */
  displaySingleExpense (expense) {
    const expenseDiv = this.createExpenseElement(expense)
    this.expenseContainer.appendChild(expenseDiv)
  }

  /**
   *
   * @param expense
   */
  createExpenseElement (expense) {
    const expenseDiv = document.createElement('tr')
    expenseDiv.className = 'expense'
    expenseDiv.innerHTML = `
      <td>${expense.getName()}</td>
      <td>${expense.getAmount()}</td>
      <td>${expense.getDate()}</td>
      <td>${expense.getCategory()}</td>
      <td><button>Delete</button></td>
    `

    const deleteButton = expenseDiv.querySelector('button')
    deleteButton.addEventListener('click', () => {
      this.expenseTracker.removeExpense(expense.getName())
      this.expenseContainer.removeChild(expenseDiv)
    })

    return expenseDiv
  }
}
