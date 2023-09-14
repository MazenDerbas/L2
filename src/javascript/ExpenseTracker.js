import { Budget } from "./Budget.js";
import { Category } from "./Category.js";
import { Expense } from "./Expense.js";

export class ExpenseTracker{
    #expenseList
    #categoryLista
    #budgetList 


    constructor() {
        this.#expenseList = [];
        this.#categoryLista = [];
        this.#budgetList = [];
    }

    getExpensLista (){
        return this.#expenseList;
    }

    getCategoryLista (){
        return this.#categoryLista;
    }

    getBudgetList () {
        return this.#budgetList;
    }

    addExpense (name, amount, date, category){
        const expence = new Expense (name, amount, date, category);
        this.#expenseList.push(expence);
    }

    addCategory( name){
        const category = new Category(name);
        this.#categoryLista.push(category);
    }

    addBudget (category,amount){
        const budget = new Budget (category , amount);
        this.#budgetList.push(budget);
    }

    getExpensesByCategory(category) {
        const categoryExpenses = []
        for (const expense of this.#expenseList){
            if (expense.getCategory() === category){
                categoryExpenses.push(expense);
            }
        }
     return categoryExpenses;
  }

   getTotalExpenses () {
     let amount = 0;
     
     for (const expense of this.#expenseList){
         if(expense.getAmount()){
             amount += expense.getAmount()
         }
     }
     return amount
   }
}