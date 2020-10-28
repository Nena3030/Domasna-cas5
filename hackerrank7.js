const niza = [1, 2, 3, 4, 10, 11]
const total = niza.reduce ((sum, broj)=>{
return sum+broj
},0)

console.log (total)