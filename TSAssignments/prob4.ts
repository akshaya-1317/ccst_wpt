function sqr(n : number){
    var i;
    var sqr1:number = 0;
    var sum:number = 0;
    
    for(i=1; i<=n; i++){
        if(i%2 == 0){
            sqr1 = i*i
            sum = sum + sqr1
        }
    }
    return sum
}
console.log(sqr(10))