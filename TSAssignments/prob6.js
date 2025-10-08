function squarNumbers() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var i;
    var squre;
    var sar = [];
    for (i = 0; i < arr.length; i++) {
        squre = arr[i] * arr[i];
        sar.push(squre);
    }
    return sar;
}
console.log(squarNumbers(1, 2, 3, 4, 5));
