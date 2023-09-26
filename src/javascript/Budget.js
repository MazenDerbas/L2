/**
 * Represents a budget for a specific category.
 */
export class Budget {
  #category
  #amount

  /**
   * Creates a new Budget instance.
   *
   * @param {string} category - The category for which the budget is defined.
   * @param {number} amount - The budgeted amount for the specified category.
   */
  constructor (category, amount) {
    this.#setCategory(category)
    this.#setAmount(amount)
  }

  /**
   * Sets the category for which the budget is defined.
   *
   * @param {string} category - The category name.
   */
  #setCategory (category) {
    this.#category = category
  }

  /**
   * Sets the budgeted amount for the category.
   *
   * @param {number} amount - The budgeted amount.
   */
  #setAmount (amount) {
    this.#amount = amount
  }

  /**
   * Gets the category for which the budget is defined.
   *
   * @returns {string} - The category name.
   */
  getCategory () {
    return this.#category
  }

  /**
   * Gets the budgeted amount for the category.
   *
   * @returns {number} - The budgeted amount.
   */
  getAmount () {
    return this.#amount
  }
}
