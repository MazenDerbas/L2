import { Expense } from "./Expense.js";
import { Category } from "./Category.js";
import { ExpenseTracker } from "./ExpenseTracker.js";




const tracker = new ExpenseTracker();

const category1 = new Category("Food")
const category2 = new Category("Food2")


//
tracker.addExpense("Lunch",   15 , "2023-09-10", "Food" , "sad");
tracker.addExpense("Lunch",   15 , "2023-09-10", "Food" , "sad");

tracker.addExpense("Lunch",   15 , "2023-09-10", "Food2" , "sad");
tracker.addExpense("Lunch",   15 , "2023-09-10", "Food2" , "sad");




tracker.addCategory(category1)
tracker.addCategory(category2)

tracker.addBudget("Food", "500")


//console.log(tracker)

//console.log(tracker.getExpensLista())

console.log(tracker.getExpensesByCategory("Food"))

console.log(tracker.getTotalExpenses())

