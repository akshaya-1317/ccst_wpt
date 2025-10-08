function min(...numbers: number[]){
  //  const numbers : number = [2,3,4,5,6]
   
    let smallest = numbers[0]

    for(let i=1; i<numbers.length; i++){
        if (numbers[i] < numbers[i+1]){
            smallest = numbers[i];
        }
    }
//return smallest;
    console.log("Smallest number is: " + smallest)

}
min(45,30,2,8,5);

