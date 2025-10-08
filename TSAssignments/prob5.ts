function num(...numbers:any[]){

var min = numbers[0];
var max = numbers[0];
var sum = 0;

for(var num of numbers){
    if (num<min){
        min=num;
    }
    if (num>max){
        max=num;
    }
    sum = sum+num;

}
var avg = sum/numbers.length

console.log("Minimum number is: " +min)
console.log("Maximum number is: " +max)
console.log("Sum is: " +sum)
console.log("Average is: " +avg)
}

num(4,6,8,10,89,92,54)

