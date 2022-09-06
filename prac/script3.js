// ########## Date objects and its methods

// const now = new Date();
// console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// console.log("Timestamp: "+now.getTime());
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());


// ########### Timestamp and comparison

const before = new Date("Sat Jan 03 1970 01:00:00");

console.log(before);

const now=new Date();

console.log(now);

const diff = now.getTime()-before.getTime();
console.log(Math.trunc(diff/(1000*60*60*24*365)));


