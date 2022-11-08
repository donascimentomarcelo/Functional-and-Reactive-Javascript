class Product {

    constructor(name, price, discount = 0.5) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
}

Object.defineProperty(Product.prototype, 'customDiscount', {
    get: function() {
        return `${this.discount * 100}% off`
    },
    set: function(newDiscount) {
        if (newDiscount >= 0 && newDiscount <= 1)
            this.discount = newDiscount;
    }
});

const product = new Product('Car', 50000, 0.1);

product.customDiscount = 0.2;

console.log(product.name);
console.log(product.customDiscount);