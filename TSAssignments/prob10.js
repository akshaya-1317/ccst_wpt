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
var item4 = { pname: "DDD", price: 4000 };
var item5 = { pname: "EEE", price: 5000 };
all.printAllProducts(item1);
all.printAllProducts(item2);
all.printAllProducts(item3);
all.printAllProducts(item4);
all.printAllProducts(item5);
console.log("Items are: ", all.products);
console.log("Items are: ", all.printAllProducts);
var startIndex = 1;
var endIndex = 3;
var subArray = ProductsS.slice(startIndex, endIndex);
console.log(subArray);
