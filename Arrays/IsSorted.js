const myArr=[1,2,3,4,5,1]


// optimal solution with time complexity O(n^2)
const naiveIsSorted= (arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
               return false;
            }
        }
    }
    return true;
}

// optimal function with time complexity O(n)
const isSorted = (arr)=>{
    for(let i=1;i<arr.length;i++){
        if(arr[i-1]>arr[i]){
           return false
        }
    }
    return true
}


console.log(naiveIsSorted(myArr))
console.log(isSorted(myArr))