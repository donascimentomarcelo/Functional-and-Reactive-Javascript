class Product {

    constructor(name, price, discount = 0.5) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }

    // get means that I can call "total" as a attribute
    get total() {
        return this.price * (1 - this.discount);
    }

    set setName(newName) {
        this.name = newName.toUpperCase();
    }
}

const product = new Product('Car', 50000, 0.1);
product.setName = 'Another Car'

console.log(product.name);
console.log(product.total);