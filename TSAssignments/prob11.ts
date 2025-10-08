function evenElement(...arr: number[]){
    let i
    let cube
    let arr1: number[] =[]
    for(i=0;i<arr.length;i++){
        if(arr[i]%2==0){

            cube=arr[i]*arr[i]*arr[i]
            arr1.push(cube)
        }
    }
 return arr1
}

console.log(evenElement(1,2,3,4,5,6,7,8,9,10))