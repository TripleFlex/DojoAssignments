var newarr = [];
var arr = [1,10,'words'];

for(var i = 0;i < arr.length;i++){
  if(typeof arr[i] === 'number'){
    newarr.push(arr[i]);
  }
}
console.log(newarr);
