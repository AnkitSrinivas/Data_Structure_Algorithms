const myArr=[21,6,85,86,12]

// optimal approach with time complexity O[n]
function largestIndex(arr){
    let largest=0
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[largest])
          largest=i
    }

    return largest

}

//naive approach with time complexity O(n^2)
function naiveApproach(arr){
    let largest=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[i]<arr[j])
             largest=j
        }
    }
    return arr[largest]
}

console.log("Largest element index "+largestIndex(myArr))
console.log(`the largest Element is ${myArr[largestIndex (myArr)]}`)

console.log(`the largest Element is ${naiveApproach(myArr)}`)