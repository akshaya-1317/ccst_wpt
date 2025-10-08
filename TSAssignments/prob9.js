var ProductsS = /** @class */ (function () {
    function ProductsS() {
        this.products = [];
    }
    ProductsS.prototype.printAllProducts = function (product) {
        this.products.push(product);
    };
    return ProductsS;
}());
var all = new ProductsS();
var item1 = { pname: "AAA", price: 1000 };
var item2 = { pname: "BBB", price: 2000 };
var item3 = { pname: "CCC", price: 3000 };
all.printAllProducts(item1);
all.printAllProducts(item2);
all.printAllProducts(item3);
console.log("Items are: ", all.products);
console.log("Items are: ", all.printAllProducts);
