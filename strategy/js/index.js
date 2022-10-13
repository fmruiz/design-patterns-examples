/*
 * Strategy example with javascript
 */
class SaleContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(amount) {
        return this.strategy.calculate(amount);
    }
}

class RegularSalesStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + amount * this.tax;
    }
}

class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax = tax;
        this.discount = discount;
    }

    calculate(amount) {
        return amount + amount * this.tax - this.discount;
    }
}

const discountSale = new DiscountSaleStrategy(0.21, 10);
const regularSale = new RegularSalesStrategy(0.21);
const sale = new SaleContext(regularSale);
console.log(sale.calculate(100));
/*
 * We can use this pattern to scale functionalities
 */
