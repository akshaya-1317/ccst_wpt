function evenElement() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var i;
    var cube;
    var arr1 = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            cube = arr[i] * arr[i] * arr[i];
            arr1.push(cube);
        }
    }
    return arr1;
}
console.log(evenElement(1, 2, 3, 4, 5, 6, 7, 8));
