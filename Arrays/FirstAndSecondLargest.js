function firstAndSecondLargest(arr){
    
    // checks if array is empty
    if(arr.length===0){
       return undefined
    }
    
    let firstLargest = arr[0]
    let secondLargest = arr[1]

    if(secondLargest>firstLargest){
        [firstLargest,secondLargest] = [secondLargest,firstLargest]
    }

    for(let i=2;i<arr.length;i++){
        if(arr[i]>firstLargest){
            [firstLargest,secondLargest]=[arr[i],firstLargest]
        }else if(arr[i]>secondLargest && arr[i]!=firstLargest){
            secondLargest=arr[i]
        }
    }

    return [firstLargest,secondLargest]
}

const myArr=[1,2,3,4,5]
const [firstLargest,secondLargest]=firstAndSecondLargest(myArr)
console.log(`The first largest number is ${firstLargest} and second largest number is ${secondLargest}`)