## Chapter 2 : meaningful Names 


| Name and Explanation                    | Reflection Rules from Clean Code                    |
|-----------------------------------------|------------------------------------------------------|
| **ExpenseTracker**  , **Chart** , <br> Class names                    | **Intention-Revealing Names**<br>The name clearly indicates that this class is responsible for tracking expenses.<br> <br>**Use Problem Domain Names** <br>  These are real-world concepts associated with personal finance and budgeting. By naming the classes after these concepts makes it easier for someone familiar with finance (but perhaps not coding) to understand the basic purpose and function of each class. <br> <br> **Use Pronounceable Names** I tried to choose class names thats easy to pronounce. Easy-to-say names will help the user focusing more on fixing issues rather than figuring out tricky names.             |                                        
| **getExpensLista** | **Avoid Disinformation**<br>"Lista" is the Swedish synonym for the word "List" this can be misleadning for the users who can think a refer to something else or non Swedish users.<br> Suggest renaming the methods to `getExpenseList`  **Use Intention-Revealing Names:** the name does communicate that it's likely retrieving a list of expenses  |                              
| **expensesByInterval**                    | **Method Names** I tried to use verb (prefix get) for all the methods but I missed this one <br> <br> **Avoid Disinformation** <br> additionally from the previous the name is not clear if it is date interval och price interval. You have to read the documentation or the variable names to understand the purpose of the method Suggest renaming the methods `getExpensesByDateInterval`     | 
| **getExpensesByCategory** and  **getCategoryExpenses**  Method names used to get expense info                                    |   **Make Meaningful Distinctions**<br>   The two names sound very similar and it can cause confusion when the first method return a list of expenses and the other sum of them.<br> Suggest renaming the method for the sum to   `getExpenesAmountByCategory`<br> <br> **Pick One Word per Concept** I used the prefix get in the methods when I want to fetch information. It is easy to understand the concept of the methods stuck with the same word         |
| **addExpense**    | **Intention-Revealing Names**<br> he name "addExpense" clearly suggests the intent of the method. A user can easily use that this method will be used to add an expense. It is maybe not clear if the expense will add to list or database or maybe collection. But I think the name is sufficient to understand th purpose   |


## Reflection Chapter 2 

In Chapter 2 of the book, I learned it's really important to choose good names when writing code. Good names make it easy for people to get what the code does. For example, in my project, I named the main class to "ExpenseTracker." This name shows it's about keeping track of expenses. I also have named another class to "Chart," which is likely about making charts.

I tried to use verbs for the methods and nouns for the classes and never try to be cute by using odd method names. 
But I made a mistake. I used the Swedish word "Lista" in "getExpensLista." This can be confusing for people who don't speak Swedish. I need to use words that most people will get.

The big lesson was to give clear names to things in my code. I shouldn't just pick any name. The name should tell people what that part of the code does. Like the method "getRemainingBudget" which return the amount of the left budget of the category. And "addExpense" is about adding an expense. But I saw that some names I chose might be confusing. Especially if they sound like another name till example getExpensesByCategory and getCategoryExpenses .

Good names are super helpful. They can work like a mini-guide or note. This means the next person looking at my code (or even me in the future) can quickly understand it. It's like giving a book a clear title. If the title is good, you have a good idea of the story before you even start reading.

<br>
<br>

## Chapter 3 : Functions

|  Name and Explanation | number of lines |   Reflection Rules from Clean Code   |
| -----                   | ----- | ------ |
| **drawBarChart** | 27 | **small** <br> I tried to keep methods and function as short as possible but because I struggled with drawBarChart function I totally forgot about this concept and I ended up with a function with more than 30 lines. <br> **Do One Thing** <br> Here I made also a mistake with I did not do with other functions. The function drawBarChart calculate the max value of the enterd data which I should do it in separate function   |
| **getTotalExpenses**   | 9 | **One Level of Abstraction per Function** <br> The function is mostly at a high level of abstraction getting the total expenses. I think when the function check for if(expense.getAmount()) it gets into a slightly lower level by verifying details about each expense.  **Do One Thing** <br> the function's main job is to add up amount of expenses I think the fucntion largely follows the "Do One Thing" principle.  |
| **getExpensesByCategory** | 11 | **Use Descriptive Names** The method's name, getExpensesByCategory, speaks for itself. You can instantly tell that it fetches expenses for a given category. You don't even need to look at the implementation or read extra comments to get it. It's like saying, "What's this function do?" and the name whispers back, "I'll show you expenses for a category."   |
| **addExpense**  | 6 |  **Function Arguments** <br> The function has four arguments which is polyadic. According the book I should not use his amount of arguemnts. I could avoid this by just using one argumment `addExpense(expense)` and make the user creat new object of class Expense <br> **Have No Side Effects**  <br> This function has side effects as it potentialy add a new category if the category does not exist. I could break down the function into function that checks if the category exist and one to add the expense|
| **getRemainingBudget** | 16 | **Fnction Argument** <br> The function takes a single argument, which is good. It's clear that we are getting the remaining budget for a particular category. <br> **Structured Programming** <br> The function uses structured programming with clear loops and conditionals. There isn’t any use of goto or other unstructured jumps, so it fullfil the guidelines of structured programming. |

<br>

## Reflections on Chapter 3 

Reading Chapter 3 of "Clean Code" give me a new perspective about how to write good functions. I am a new programmer with no previous experince in this faild. I never thought about how important the structure of the code is until I read this chapter

Firstly, I learned the important value of simplicity. Martin emphasizes how the best functions are those that do one thing and do it well. They should be small, focused, and free from side effects. Before this chapter, I never really gave much thought to the size of a function. However. This made made me realize that longer functions tend to be harder to understand and maintain.

additionally on the topic of small functions, the suggestion that a function should hardly ever be more than 20 lines felt a bit rough. I understand the logic; a smaller function is easier to digest and troubleshoot. But I think there are times when it makes more sense for a function to be slightly longer if it aids clarity or avoids unnecessary details functions

I also learned the importance of naming functions descriptively. A name like isUserValid() is so much clearer than something vague like check1(). This seems obvious, but in the rush of coding, it's easy to forget this simple guideline. A well-named function can reduce the need for a comment because the name itself becomes self-explanatory.

I also learnd that fewer parameters a function has, the better. This is a point I somewhat disagree with. While I understand that having fewer arguments makes a function easier to understand and use, there are situations where multiple parameters are necessary for the function to perform its task. I think the emphasis should be on clarity and necessity, rather than an number

Chapter 3 makes me see that functions not just as tools but as art forms that require care and thoughtful design. It's clear that the road to clean code isn't just about making code work; it's about making code that stands the test of time, that other people can understand and that remains maintainable and bug-free.

<br>
<br>
# Reflections on the project ExpenceTracker module

When I started working on the ExpenseTracker module, I thought it'd be simple. But as I got into it, I realized there were a lot of details to think about.

The book says that each part of the code should do just one thing. So, I kept changing my code to make sure that is possible in my classes. This made my code cleaner and easier to check for mistakes. I can not say that all the functions and method in the module do one thing but I tried as I can to do so.

Naming things in the code was another thing I learned. Instead of using short or confusing names, Before I read how to avoid mental mapping I used to use short name for the variable. But now I used clear ones that will indicate the purpose of the code within diving into details and comments. I was not easy to apply all the concepts that mentioned in the book. But by reading these concepts I got a new prespective about some tiny thing such as the class and method name. I never think that method name is more clear if we use a verb as a part of the name. I tried to follow this concept in my project so any user can easly figure out what every function should do

The most challenging part was to keep the function small (under 20 lines) and to have functions that can do just one thing. I tried to follow this as much as possible but I did some exceptions in some parts 

The ExpenseTracker project taught me a lot. Thanks to "Clean Code," I learned that good code isn't just about making things work but also about making it easy for others (and future me) to understand and change.

