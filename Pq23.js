let months = ["january","july","march","august"];
months.shift();
let store_month = months.shift();
months.unshift('june');
months.unshift(store_month);
console.log(months);