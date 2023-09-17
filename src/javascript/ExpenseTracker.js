import { Budget } from "./Budget.js";
import { Category } from "./Category.js";
import { Expense } from "./Expense.js";


/**
* Represents an Expense Tracker that helps manage expenses and budgets.
*/
export class ExpenseTracker{
    #expenseList
    #categoryLista
    #budgetList 

    /**
    * Creates a new instance of ExpenseTracker.
    */
    constructor() {
        this.#expenseList = [];
        this.#categoryLista = [];
        this.#budgetList = [];
    }

    /**
    * Get the list of expenses.
    * @returns {Expense[]} An array of Expense objects.
    */
    getExpensLista() {
        return this.#expenseList;
    }

    /**
    * Get the list of categories.
    * @returns {Category[]} An array of Category objects.
    */
    getCategoryLista() {
        return this.#categoryLista;
    }

    /**
    * Get the list of budgets.
    * @returns {Budget[]} An array of Budget objects.
    */
    getBudgetList() {
        return this.#budgetList;
    }

    /**
    * Add a new category.
    * @param {string} name - The name of the category to add.
    */
    #addCategory(name) {
        const category = new Category(name);
        this.#categoryLista.push(category);
    }

    /**
     * Add an expense to the tracker.
     * @param {string} name - The name of the expense.
     * @param {number} amount - The amount of the expense.
     * @param {string} date - The date of the expense in 'YYYY-MM-DD' format.
     * @param {string} category - The category of the expense.
     */
    addExpense (name, amount, date, category){
        const existingCategory = this.getCategoryLista().find(cat => cat.getName() === category);
        if (!existingCategory) {
            this.#addCategory(category);
        } 
        const expense = new Expense (name, amount, date, category);
        this.#expenseList.push(expense);
    }

    /**
     * Add a new budget for a category.
     * @param {string} category - The category for which to add a budget.
     * @param {number} amount - The budget amount.
     */
    addBudget (category,amount){
        const budget = new Budget (category , amount);
        this.#budgetList.push(budget);
    }

    /**
     * Get expenses for a specific category.
     * @param {string} category - The category for which to retrieve expenses.
     * @returns {Expense[]} An array of Expense objects for the specified category.
     */
    getExpensesByCategory(category) {
        const categoryExpenses = []
        for (const expense of this.getExpensLista()) {
            if (expense.getCategory() === category){
                categoryExpenses.push(expense);
            }
        }
        return categoryExpenses;
    }

    /**
    * Get the total expenses across all categories.
    * @returns {number} The total expenses as a numeric value.
    */
    getTotalExpenses () {
        let amount = 0;
     
        for (const expense of this.getExpensLista()){
            if(expense.getAmount()){
             amount += expense.getAmount()
            }
        }
        return amount
    }

    /**
     * Get the total expenses for a specific category.
     * @param {string} category - The category for which to calculate total expenses.
     * @returns {number} The total expenses for the specified category as a numeric value.
     */
    getCategoryExpenses (category) {
        let amount = 0;

        for (const expense of this.getExpensLista()) {
            if (expense.getCategory() === category) {
            amount += expense.getAmount();
            }
        }
        return amount;
    }

    /**
     * Get the remaining budget amount for a specific category.
     * @param {string} category - The category for which to calculate the remaining budget.
     * @returns {number} The remaining budget amount for the specified category.
     */
    getRemainingBudget (category) {
        let budget;
        let remain = 0;
        for (const b of this.getBudgetList()) {
            if (b.getCategory() === category) {
            budget = b;
           
            }
        }
        if (budget) {
            const categoryExpenses = this.getCategoryExpenses(budget.getCategory())
            remain = budget.getAmount() - categoryExpenses;
        }
        return remain;
    }

    /**
     * Get a summary report of total expenses for each category.
     * @returns {Object} An object where category names are keys, and total expenses are values.
     */
    getExpenseReport() {
        const summary = {};
        let totalExpenses = 0;
        const expenses = this.getExpensLista()

        for (const expense of expenses) {
            totalExpenses = this.getCategoryExpenses(expense.getCategory())
            summary[expense.getCategory()] = totalExpenses
        }
  
        return summary;
    }

    /**
     * Get a report of budgets and their remaining amounts for each category.
     * @returns {Object} An object where category names are keys, and budget information is values.
     */
    getBudgetReport() {
        const budgetReport = {};
        for (const budget of this.getBudgetList()) {
            const category = budget.getCategory();
            const totalBudget = budget.getAmount();
            const categoryExpenses = this.getCategoryExpenses(category);
            const remainingBudget = totalBudget - categoryExpenses;

            budgetReport[category] = {
            totalBudget,
            remainingBudget,
            };
        }
        return budgetReport;
    }

    /**
     * Get expenses for a specific date.
     * @param {string} date - The date for which to retrieve expenses in 'YYYY-MM-DD' format.
     * @returns {Expense[]} An array of Expense objects for the specified date.
     */
    getExpensesByDate (date) {
        const expenses = this.getExpensLista();
        let expenseDate = []
        for (const expense of expenses){
            console.log (expense.getDate() )
            if (expense.getDate() === date){
              expenseDate.push(expense)
            }
        }
        return expenseDate;
    }
    
    /**
     * Get expenses within a specified date interval.
     * @param {string} startDate - The start date of the interval in 'YYYY-MM-DD' format.
     * @param {string} endsDate - The end date of the interval in 'YYYY-MM-DD' format.
     * @returns {Expense[]} An array of Expense objects within the specified date interval.
     */
    expensesByInterval ( startDate, endsDate) {
        const expenses = this.getExpensLista();
        let expenseInterval = []

        for (const expense of expenses) {

            if (expense.getDate() <= endsDate && expense.getDate() >= startDate) {  
            expenseInterval.push(expense)
            }
        }
        return expenseInterval
    }
}   
    
 

