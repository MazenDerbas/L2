import { Expense } from "./Expense.js";
import { Category } from "./Category.js";
import { ExpenseTracker } from "./ExpenseTracker.js";




const tracker = new ExpenseTracker();

const category1 = new Category("Food")



tracker.addExpense("Lunch",   15 , "2023-09-10", "Food" , "sad");
tracker.addExpense("Lunch",   15 , "2023-09-10", "Food" , "sad");
tracker.addCategory(category1)


console.log(tracker)

console.log(tracker.getExpensLista())


