let a= [1,2,3,4,5,6,7,8];
let sum = 0;
for (let i = 0; i < a.length; i++) {
    if (a[i]%2 ==0){
        sum+= a[i];
    }
}
console.log(sum);