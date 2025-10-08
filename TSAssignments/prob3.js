function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var i;
    var add = 0;
    var avg = 0;
    for (i = 0; i < numbers.length; i++) {
        add = add + numbers[i];
        avg = add / numbers.length;
    }
    //  avg = add/numbers.length;
    //  return add
    console.log("Sum is: ", add);
    console.log("average is ", avg);
}
console.log(sum(1, 2, 3, 4, 5));
// function avg(...nums:number[]){
//     let add1=0;
//     for(const num of nums){
//         add1+=num;
//     }
//     return add1/nums.length;
// }
// console.log(avg(1,2,3,4,5))
