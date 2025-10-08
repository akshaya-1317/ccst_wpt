function num() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var min = numbers[0];
    var max = numbers[0];
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
        sum = sum + num;
    }
    var avg = sum / numbers.length;
    console.log("Minimum number is: " + min);
    console.log("Maximum number is: " + max);
    console.log("Sum is: " + sum);
    console.log("Average is: " + avg);
}
num(4, 6, 8, 10, 89, 92, 54);
