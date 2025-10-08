interface Product{
    pname: string;
    price: number;
}

class ProductsS{
    products: Product[];

    constructor(){
        this.products = [];
    }

    printAllProducts(product: Product): void{
        this.products.push(product);
    }
}

const all = new ProductsS();

const item1: Product = {pname: "AAA", price: 1000};
const item2: Product = {pname: "BBB", price: 2000};
const item3: Product = {pname: "CCC", price: 3000};

all.printAllProducts(item1);
all.printAllProducts(item2);
all.printAllProducts(item3);

console.log("Items are: ", all.products);
console.log("Items are: ", all.printAllProducts);


