const arr1to10 = [];
for(let i = 1; i <= 10; i++) {
  arr1to10.push(i);
}
//console.log(arr1to10);

// a. only the odd numbers
const onlyOddnums = arr1to10.filter(x => x % 2 !== 0);
console.log(onlyOddnums);

// b. with numbers divisible by either 2 or 5
const modBy2or5 = arr1to10.filter(x => x % 2 === 0 || x % 5 === 0);
console.log(modBy2or5);

// c. array divisable by 3 and then squared
const square3s = arr1to10.filter(x => x % 3 === 0).map(x => x * x);
console.log(square3s);

const sum5Squares = arr1to10.filter(x => x % 5 === 0).map(x => x**2).reduce((accumulator, num) => accumulator + num, 0);
console.log(sum5Squares);