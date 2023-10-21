import { Chart } from '../../src/javascript/Chart.js'
/**
 *
 */
export class ExpenseChart {
  #expenseTracker
  #expenseForm
  #budgetForm
  #chartButton

  /**
   * Constructs a new ExpenseChart instance.
   *
   * @param {expenseTracker} expenseTracker - The expense tracker insatce.
   */
  constructor (expenseTracker) {
    this.#expenseTracker = expenseTracker
    this.#expenseForm = document.querySelector('.expense-container')
    this.#budgetForm = document.querySelector('.budget-container')
    this.#chartButton = document.getElementById('chart')
    this.outputContainer = document.querySelector('.output-container')
    this.startDate = document.getElementById('startDate')
    this.endDate = document.getElementById('endDate')
    this.generateButton = document.getElementById('create')

    this.hideElements()
    this.generateChartEvent()
  }

  /**
   * Event to hide HTML elements.
   */
  hideElements () {
    this.#chartButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.outputContainer.classList.add('hidden')
      this.#expenseForm.classList.add('hidden')
      this.#budgetForm.classList.add('hidden')
    })
  }

  /**
   * Event to generate a bar chart.
   */
  generateChartEvent () {
    this.generateButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.filterExpenses()
    })
  }

  /**
   * Filter expenses by date.
   */
  filterExpenses () {
    const sDate = this.startDate.value
    const eDate = this.endDate.value
    const interval = this.#expenseTracker.getExpensesByDateInterval(sDate, eDate)
    this.displayFilterdExpenses(interval)
  }

  /**
   * Renders the filtered date.
   *
   * @param {object[]} interval - The expenses data for the selected interval.
   */
  displayFilterdExpenses (interval) {
    const dateChartDate = interval.map(expense => ({
      label: expense.getName(),
      value: expense.getAmount()
    }))
    console.log(dateChartDate)
    this.createChart(dateChartDate)
  }

  /**
   * Generates a new chart in the DOM using the provided data.
   *
   * @param {object[]} dateChartData - Array of data for the chart,
   */
  createChart (dateChartData) {
    const dateChart = new Chart('barChart', dateChartData)
    dateChart.drawBarChart()
  }
}
