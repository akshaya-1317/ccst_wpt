var Product = /** @class */ (function () {
    function Product(pid, pname, pprice) {
        this.pid = pid;
        this.pname = pname;
        this.pprice = pprice;
    }
    Product.prototype.printProduct = function () {
        console.log("Product id is: " + this.pid);
        console.log("Product name is: " + this.pname);
        console.log("Product price is: " + this.pprice);
    };
    return Product;
}());
var product1 = new Product(111, "abc", 2000);
product1.printProduct();
