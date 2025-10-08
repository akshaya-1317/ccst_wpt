function min() {
    //  const numbers : number = [2,3,4,5,6]
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var smallest = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[i + 1]) {
            smallest = numbers[i];
        }
    }
    //return smallest;
    console.log("Smallest number is: " + smallest);
}
min(45, 30, 2, 8, 5);
