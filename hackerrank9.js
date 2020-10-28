let a = [17,28,30];
let b = [99,16,8];

let alice = 0;
let bob = 0;

if (a[0]>b[0]){
    alice=alice+1;
} else if (a[0]<b[0]){
    bob=bob+1;
} 
if (a[1]>b[1]){
    alice=alice+1;
}
else if (a[1]<b[1]){
    bob=bob+1;
}
if (a[2]>b[2]){
    alice=alice+1;
}
else if (a[2]<b[2]){
    bob=bob+1
}
console.log (alice,bob)