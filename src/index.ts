const enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let mysize: Size = Size.Large;
console.log(mysize);
let x;

// Note: the "taxYear?" means the paramter is optional.
// Also the (taskYear || 2022) means if taxYear is undefined, use 2022 instead.
function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 2022) return income * 1.2;
  return income * 1.4;
}

console.log(calculateTax(10000, 2022));
