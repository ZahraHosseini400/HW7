let map = new Map();
map.set("name", "John");
let keys = map.keys();

console.log(keys);
keys = Array.from(keys);// Array.from اسفاده می کنیم برای تبدیل کردن به ارایه از 
// Error: keys.push is not a function
keys.push("more");
console.log(keys);
//  باید حتما ارایه باشد که بتوانیم از متد pushاستفاده کنیم 


