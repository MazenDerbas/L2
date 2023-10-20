import { ExpenseTracker } from '../../src/javascript/ExpenseTracker.js'
import { ExpenseDisplay } from './ExpenseDisplay.js'

/**
 *
 */
export class ExpenseForm {
  #expenseTracker
  #expenseForm
  #expenseName
  #amount
  #date
  #categorySelect
  #newCategoryInput
  #addCategoryButton
  #expenseDisplay
  
  /**
   *
   * @param expenseTracker
   */
  constructor (expenseTracker) {
    this.#expenseTracker = expenseTracker
    this.#expenseForm = document.getElementById('expenseForm')
    this.#expenseName = document.getElementById('exname')
    this.#amount = document.getElementById('amount')
    this.#date = document.getElementById('date')
    this.#categorySelect = document.getElementById('category')
    this.#newCategoryInput = document.getElementById('newCategory')
    this.#addCategoryButton = document.getElementById('addCategory')
    this.#expenseDisplay = new ExpenseDisplay(this.#expenseTracker)


  }

  /**
   *
   */
  registerEventHandlers () {
    this.#expenseForm.addEventListener('submit', (e) => {
      e.preventDefault()
      this.createExpense()
      this.#expenseDisplay.displayExpenses()
    })

    this.#categorySelect.addEventListener('change', (e) => {
      if (e.target.value === 'addNew') {
        this.#newCategoryInput.style.display = 'block'
        this.#addCategoryButton.style.display = 'block'
      } else {
        this.#newCategoryInput.style.display = 'none'
        this.#addCategoryButton.style.display = 'none'
      }
    })
  }

  /**
   *
   */
  createExpense () {
    const expenseValue = this.#expenseName.value
    const amountValue = this.#amount.value
    const dateValue = this.#date.value
    let categoryValue = this.#categorySelect.value

    if (categoryValue === 'addNew') {
      categoryValue = this.newCategoryInput.value
      this.createCategory(categoryValue)
    }

    this.#expenseTracker.addExpense(expenseValue, parseFloat(amountValue), dateValue, categoryValue)
    this.#expenseForm.reset()
  }

  /**
   *
   * @param categoryValue
   */
  createCategory (categoryValue) {
    this.addOptionToDropDown(this.#categorySelect, categoryValue)
    const budgetCategoryDropdown = document.getElementById('budgetCategory')
    this.addOptionToDropDown(budgetCategoryDropdown, categoryValue)

    this.#expenseTracker.addCategory(categoryValue)
    this.#newCategoryInput.value = ''
    this.#newCategoryInput.style.display = 'none'
    this.#addCategoryButton.style.display = 'none'
    this.#categorySelect.value = categoryValue
  }

  /**
   *
   * @param dropDown
   * @param categoryValue
   */
  addOptionToDropDown (dropDown, categoryValue) {
    const option = document.createElement('option')
    option.innerText = categoryValue
    option.value = categoryValue
    dropDown.add(option, dropDown.options[dropDown.options.length - 1])
  }
}
