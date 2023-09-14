export class Category{
    #name

    constructor(name){
        this.#setName(name);
    }

    #setName(name) {
        this.#name = name
    }

    getName (){
        return this.#name
    }
}