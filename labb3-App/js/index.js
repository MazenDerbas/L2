import { ExpenseTracker } from '../../src/javascript/ExpenseTracker.js'

document.addEventListener('DOMContentLoaded', (event) => {
  const expenseForm = document.getElementById('expenseForm')
  const expenseName = document.getElementById('exname')
  const amount = document.getElementById('amount')
  const date = document.getElementById('date')
  const categorySelect = document.getElementById('category')
  const newCategoryInput = document.getElementById('newCategory')
  const addCategory = document.getElementById('addCategory')
  const budgetCategoryDropdown = document.getElementById('budgetCategory')

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
    const amountValue = amount.value
    const dateValue = date.value
    let categoryValue = categorySelect.value

    // Check if 'Add new category...' option is selected.
    if (categoryValue === 'addNew') {
      categoryValue = newCategoryInput.value
      if (categoryValue.trim() === '') {
        alert('Please enter a new category name.')
        return
      }
      createCategory(categoryValue)
    }
    expenseTracker.addExpense(expenseValue, parseFloat(amountValue), dateValue, categoryValue)

    expenseForm.reset()
  }

  

  /**
   * Desc.
   *
   * @param categoryValue
   */
  function createCategory (categoryValue) {
    addOptionToDropDown(categorySelect, categoryValue)
    addOptionToDropDown(budgetCategoryDropdown, categoryValue)
    expenseTracker.addCategory(categoryValue)
    newCategoryInput.value = ''
    newCategoryInput.style.display = 'none'
    addCategory.style.display = 'none'
    categorySelect.value = categoryValue
  }

  /**
   * Desc.
   * @param dropDown Desc.
   * @param categoryValue
   */
  function addOptionToDropDown (dropDown, categoryValue) {
    const option = document.createElement('option')
    option.innerText = categoryValue
    option.value = categoryValue
    dropDown.add(option, dropDown.options[dropDown.options.length - 1])
  }

  /**
   * Desc.
   *
   * @param expense
   */
  function deleteExpense (expense) {
    expenseTracker.removeExpense(expense.getName())
    displayExpense()
  }

  /**
   * Desc.
   */
  function displayExpense () {
    const expenseContainer = document.getElementById('expenseContainer')
    expenseContainer.innerHTML = ''

    const display = expenseTracker.getExpensList()

    display.forEach(expense => {
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
      deleteButton.addEventListener('click', (e) => {
        deleteExpense(expense)
        expenseDiv.remove()
      })
      expenseContainer.appendChild(expenseDiv)
    })
  }

  categorySelect.addEventListener('change', (e) => {
    if (e.target.value === 'addNew') {
      newCategoryInput.style.display = 'block'
      addCategory.style.display = 'block'
    } else {
      newCategoryInput.style.display = 'none'
      addCategory.style.display = 'none'
    }
  })
})
