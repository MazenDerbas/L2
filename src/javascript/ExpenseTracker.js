import { Category } from "./Category.js";
import { Expense } from "./Expense.js";

export class ExpenseTracker{
    #expenseList
    #categoryLista


    constructor() {
        this.#expenseList = [];
        this.#categoryLista = [];
    }

    getExpensLista (){
        return this.#expenseList
    }

    getCategoryLista (){
        return this.#categoryLista
    }

    addExpense (name, amount, date, category){
        const expence = new Expense (name, amount, date, category);
        this.#expenseList.push(expence)
    }

    addCategory( name){
        const category = new Category(name);
        this.#categoryLista.push(category);
    }

}