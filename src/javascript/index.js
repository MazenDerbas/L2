import { Expense } from "./Expense.js";
import { Category } from "./Category.js";
import { ExpenseTracker } from "./ExpenseTracker.js";




const tracker = new ExpenseTracker();

const category1 = new Category("Food")
const category2 = new Category("Transport")


//
tracker.addExpense("Lunch",   15 , "2023-09-10", "Food");
tracker.addExpense("Lunch",   25 , "2023-09-10", "Food" );
tracker.addExpense("Lunch",   500 , "2023-09-10", "Food" );

tracker.addExpense("bus",   20 , "2023-09-10", "Transport");
tracker.addExpense("train",   30 , "2023-09-10", "Transport");


tracker.addExpense("train",   30 , "2023-09-10", "Leasure");


tracker.addBudget("Food", "500")

console.log(tracker.getCategoryLista())


//console.log(tracker)

//console.log(tracker.getExpensLista())

//console.log(tracker.getExpensesByCategory("Food"))

//console.log(tracker.getTotalExpenses())

//console.log (tracker.getCategoryExpenses("Food"))
//console.log (tracker.getCategoryExpenses("Transport"))

//console.log (tracker.getRemainingBudget("Food"))

console.log(tracker.getExpenseReport())
