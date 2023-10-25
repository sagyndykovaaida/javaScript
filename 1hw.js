let a = [1,2,4,6,7,8];
function find(a){
    let min = Math.min(...a);
    let max = Math.max(...a);
    return {
        min:min,
        max:max,
    };
}
console.log(find(a));


