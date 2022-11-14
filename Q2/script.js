function sort(...Args) {


  let result = Args.flat().sort((a, b)=>{return b - a});
  return result;
}

console.log(sort([52, 6, 2], [3, 7, 1], [2, 4, 8, 1]));



// for (let i = 0; i < arr.Length; i++) {
//   for (let j = i+1; j < arr.Length; j++) {
//      if(arr[i] < arr[j]) {
//          temp = arr[i];
//          arr[i] = arr[j];
//          arr[j] = temp;
//      }
//   }
// }
