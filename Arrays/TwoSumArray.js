const myArr=[2,7,11,15]
const target=9

//naive approach with time complexity O(n^2)
const twoSum=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j]
            }
        }
    }

    return -1
}



// solution with time complexity O(n) and space complexity O(n)
const twoSumOptimal = (arr,target) => {
    let myObj={}

    for(let i=0;i<arr.length;i++){
        if(myObj.hasOwnProperty(target-arr[i])){
           return [myObj[target-arr[i]],i]
        }else{
            myObj[arr[i]]=i
            
        }
    }
}


console.log(twoSum(myArr,target))
console.log(twoSumOptimal(myArr,target))
console.log(twoSumArray(myArr,target))
