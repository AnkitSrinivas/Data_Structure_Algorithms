const myArr=[1,2,2,3,3,3]

const removeDuplicate=function (arr){
   let index=1
   for(let i=1;i<arr.length;i++){
       if(arr[index-1]!==arr[i]){
        arr[index]=arr[i]
        index++
       }
   }
    
    arr.length=index
    return arr
}

console.log(removeDuplicate(myArr))






