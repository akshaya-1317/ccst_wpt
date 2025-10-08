
class Product {
   pid: number;
   pname: string;
   pprice: number;

constructor(pid: number, pname: string, pprice: number){
    this.pid = pid;
    this.pname = pname;
    this.pprice = pprice;
}

printProduct(): void {
    console.log("Product id is: " + this.pid)
    console.log("Product name is: " + this.pname)
    console.log("Product price is: " + this.pprice)

}
}

const product1 = new Product(111, "abc", 2000);
product1.printProduct();

