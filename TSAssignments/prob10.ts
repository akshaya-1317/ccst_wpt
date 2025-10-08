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
const item4: Product = {pname: "DDD", price: 4000};
const item5: Product = {pname: "EEE", price: 5000};


all.printAllProducts(item1);
all.printAllProducts(item2);
all.printAllProducts(item3);
all.printAllProducts(item4);
all.printAllProducts(item5);

console.log("Items are: ", all.products);
console.log("Items are: ", all.printAllProducts);

const startIndex: number = 1;
const endIndex: number = 3;

const subArray: number[] = ProductsS.slice(startIndex, endIndex);

console.log(subArray);
