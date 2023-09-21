## Chapter 2 : meaningful Names 


| Name and Explanation                    | Reflection Rules from Clean Code                    |
|-----------------------------------------|------------------------------------------------------|
| **ExpenseTracker**  , **Chart** , <br> Class names                    | **Intention-Revealing Names**<br>The name clearly indicates that this class is responsible for tracking expenses.<br> <br>**Use Problem Domain Names** <br>  These are real-world concepts associated with personal finance and budgeting. By naming the classes after these concepts makes it easier for someone familiar with finance (but perhaps not coding) to understand the basic purpose and function of each class. <br> <br> **Use Pronounceable Names** I tried to choose class names thats easy to pronounce. Easy-to-say names will help the user focusing more on fixing issues rather than figuring out tricky names.             |     
|
|                                             |
| **getExpensLista** | **Avoid Disinformation**<br>"Lista" is the Swedish synonym for the word "List" this can be misleadning for the users who can think a refer to something else or non Swedish users.<br> Suggest renaming the methods to `getExpenseList`  **Use Intention-Revealing Names:** the name does communicate that it's likely retrieving a list of expenses  |                          
|                                           | |      
| **expensesByInterval**                    | **Method Names** I tried to use verb (prefix get) for all the methods but I missed this one <br> <br> **Avoid Disinformation** <br> additionally from the previous the name is not clear if it is date interval och price interval. You have to read the documentation or the variable names to understand the purpose of the method Suggest renaming the methods `getExpensesByDateInterval`     | 
|                                           |                               |
| **getExpensesByCategory** and  **getCategoryExpenses**  Method names used to get expense info                                    |   **Make Meaningful Distinctions**<br>   The two names sound very similar and it can cause confusion when the first method return a list of expenses and the other sum of them.<br> Suggest renaming the method for the sum to   `getExpenesAmountByCategory`<br> <br> **Pick One Word per Concept** I used the prefix get in the methods when I want to fetch information. It is easy to understand the concept of the methods stuck with the same word         |
|                                           |                                                     |
| **addExpense**    | **Intention-Revealing Names**<br> he name "addExpense" clearly suggests the intent of the method. A user can easily use that this method will be used to add an expense. It is maybe not clear if the expense will add to list or database or maybe collection. But I think the name is sufficient to understand th purpose   |


## Reflection Chapter 2 

In Chapter 2 of the book, I learned about the importance of naming things in code. Good names help people understand what the code is doing. Like in my project, I used names that tell what the code does, like "ExpenseTracker" which tracks expenses, or "Chart" which is probably about drawing bar charts. But I also found mistakes. I used a Swedish word "Lista" in "getExpensLista" which can confuse non-Swedish people. So, I need to use words that most coders will understand.

I learnded to make make the names my classes and methods clear, simple, and easy for others to understand. It's not just about picking any name; it's about picking names that immediately tell someone what the class, method, or variable does. for exemple in my project, "ExpenseTracker" directly tells you its job – it tracks expenses. Similarly, "addExpense" However, I realized I've also made some naming choices that might not be clear to everyone. Using methods with similar names might confuse people.
The good naming can be like a short comment or documentation. It helps the next person (or even future me) quickly understand the code without having to dig deep into it. It's like giving a clear title to a story. If done right, the reader will know what to expect from the start.