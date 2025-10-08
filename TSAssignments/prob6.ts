function squarNumbers(...arr: number[]) {
    let i: number;
    let squre: number;
    let sar: number[] = []
    for (i = 0; i < arr.length; i++) {
        squre = arr[i] * arr[i];
        sar.push(squre)

    }
    return sar;
}

console.log(squarNumbers(1, 2, 3, 4, 5))