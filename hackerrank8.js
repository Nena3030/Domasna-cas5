//A Very Big Sum

const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
const sum = arr.reduce ((total,num)=>{
    return total+num
},0)

console.log (sum)

//let array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
//let suma = 0;
//for (i=0; i<array.length; i++){
   // suma+=array[i]
//}
//console.log (suma)