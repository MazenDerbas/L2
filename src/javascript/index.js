
import { Category } from "./Category.js";
import { ExpenseTracker } from "./ExpenseTracker.js";




const tracker = new ExpenseTracker();

const category1 = new Category("Food")
const category2 = new Category("Transport")


//
tracker.addExpense("Lunch",   15 , "2023-08-10", "Food");
tracker.addExpense("Lunch",   25 , "2023-09-11", "Food" );
tracker.addExpense("Lunch",   500 , "2023-11-10", "Food" );

tracker.addExpense("bus",   20 , "2023-09-12", "Transport");
tracker.addExpense("train",   30 , "2023-09-10", "Transport");


tracker.addExpense("train",   30 , "2023-09-13", "Leasure");


tracker.addBudget("Food", "500")

console.log(tracker.getCategoryLista())


const date = "2023-09-10"

console.log(date, tracker.getExpensesByDate(date))

console.log(tracker.expensesByInterval("2023-08-10", "2023-09-10"))

//console.log(tracker)

//console.log(tracker.getExpensLista())

//console.log(tracker.getExpensesByCategory("Food"))

//console.log(tracker.getTotalExpenses())

//console.log (tracker.getCategoryExpenses("Food"))
//console.log (tracker.getCategoryExpenses("Transport"))

//console.log (tracker.getRemainingBudget("Food"))

console.log(tracker.getExpenseReport())
