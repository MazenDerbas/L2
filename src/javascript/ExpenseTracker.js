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

    #addCategory( name){
        const category = new Category(name);
        this.#categoryLista.push(category);
    }

    addExpense (name, amount, date, category){
        const existingCategory = this.getCategoryLista().find(cat => cat.getName() === category);
        if (!existingCategory) {
            this.#addCategory(category);
        } 
        const expense = new Expense (name, amount, date, category);
        this.#expenseList.push(expense);
    }





    addBudget (category,amount){
        const budget = new Budget (category , amount);
        this.#budgetList.push(budget);
    }

    getExpensesByCategory(category) {
        const categoryExpenses = []
        for (const expense of this.getExpensLista()) {
            if (expense.getCategory() === category){
                categoryExpenses.push(expense);
            }
        }
     return categoryExpenses;
  }

   getTotalExpenses () {
     let amount = 0;
     
     for (const expense of this.getExpensLista()){
         if(expense.getAmount()){
             amount += expense.getAmount()
         }
     }
     return amount
   }

   getCategoryExpenses (category) {
     let amount = 0;

     for (const expense of this.getExpensLista()) {
        if (expense.getCategory() === category) {
            amount += expense.getAmount();
        }
      }
      return amount;
   }

   getRemainingBudget (category) {
    let budget;
    let remain = 0;
     for (const b of this.getBudgetList()) {
        if (b.getCategory() === category) {
            budget = b;
           
        }
        console.log(budget)
     }
     if (budget) {
        const categoryExpenses = this.getCategoryExpenses(budget.getCategory())
        remain = budget.getAmount() - categoryExpenses;
     }
     return remain;
   }


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
}
  
 

