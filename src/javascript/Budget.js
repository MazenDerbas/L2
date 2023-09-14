export class Budget{
    #category
    #amount

    constructor(category, amount) {
        this.#setCategory(category)
        this.#setAmount(amount)
    }


    #setCategory (category) {
        this.#category = category
    }

    #setAmount (amount) {
        this.#amount = amount
    }
    
    getCategory () {
        return this.#category
    }

    getAmount() {
        return this.#amount
    }

}