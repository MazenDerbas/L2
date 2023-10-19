import { ExpenseTracker } from '../../src/javascript/ExpenseTracker.js'

document.addEventListener('DOMContentLoaded', (event) => {
  const expenseForm = document.getElementById('expenseForm')
  const expenseName = document.getElementById('exname')
  const amount = document.getElementById('amount')
  const date = document.getElementById('date')
  const categorySelect = document.getElementById('category')
  const newCategoryInput = document.getElementById('newCategory')
  const addCategory = document.getElementById('addCategory')

  const expenseTracker = new ExpenseTracker()

  expenseForm.addEventListener('submit', (e) => {
    e.preventDefault()
    createExpense()
    displayExpense()
  })

  categorySelect.addEventListener('change', (e) => {
    if (e.target.value === 'addNew') {
      newCategoryInput.style.display = 'block'
      addCategory.style.display = 'block'
    } else {
      newCategoryInput.style.display = 'none'
      addCategory.style.display = 'none'
    }
  })

  /**
   * Desc.
   */
  function createExpense () {
    const expenseValue = expenseName.value
    const amoutValue = amount.value
    const dateValue = date.value
    let categoryValue
    if (categorySelect.value === 'addNew') {
      categoryValue = newCategoryInput.value
    } else {
      categoryValue = categorySelect.value
    }
    newCategoryInput.style.display = 'none'
    addCategory.style.display = 'none'
    expenseTracker.addExpense(expenseValue, parseFloat(amoutValue), dateValue, categoryValue)
  }

  /**
   * Desc.
   */
  function creatCategory () {
    const categoryValue = newCategoryInput.value
    if (categoryValue === '') {
      return
    }

    const option = document.createElement('option')
    option.innerText = categoryValue
    option.value = categoryValue
    const lastOption = categorySelect.options[categorySelect.options.length - 1]
    categorySelect.insertBefore(option, lastOption)
    expenseTracker.addCategory(categoryValue)
    newCategoryInput.value = ''
    newCategoryInput.style.display = 'none'
    addCategory.style.display = 'none'
    categorySelect.value = categoryValue
  }

  /**
   * Desc.
   */
  function displayExpense () {
    const expenseContainer = document.getElementById('expenseContainer')
    expenseContainer.innerHTML = ''

    const display = expenseTracker.getExpensList()

    display.forEach(expense => {
      const expenseDiv = document.createElement('div')
      expenseDiv.className = 'expense'

      expenseDiv.innerHTML = `
            <p>Name: ${expense.getName()}</p>
            <p>Amount: ${expense.getAmount()}</p>
            <p>Date: ${expense.getDate()}</p>

        `
      expenseContainer.appendChild(expenseDiv)
    })
  }

  addCategory.addEventListener('click', (e) => {
    e.preventDefault()
    creatCategory()
  })
})
