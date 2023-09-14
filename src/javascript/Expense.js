export class Expense {
    #name
    #amount
    #date
    #category


    constructor(name, amount, date, category) {
      this.#setName(name);
      this.#setAmount(amount);
      this.#setDate(date);
      this.#setCategory(category);
    }
  
    getName () {
      return this.#name;
    }
  
    #setName(newName) {
      this._name = newName;
    }
  
    getAmount () {
      return this.#amount;
    }
  
    #setAmount(amount) {
      this.#amount = amount;
    }
  
    getDate() {
      return this.#date;
    }
  
    #setDate(date) {
      this.#date = date;
    }
  
    getCategory() {
      return this.#category;
    }
  
    #setCategory(category) {
      this.#category = category;
    }
  }
  