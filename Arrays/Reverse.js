const myArr=[1,2,3,4,5]

const arrReverse = function(a){
    n=a.length
    for(let i=0;i<n/2;i++) {
        [a[i],a[n-i-1]]=[a[n-i-1],a[i]]  //destructuring used to swap two numbers
       }
  return a;
}

console.log(arrReverse(myArr))