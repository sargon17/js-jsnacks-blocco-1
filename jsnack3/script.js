// const number = prompt("Input any lenght number:");

// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   let n = String(number).slice(i, i + 1);
//   sum += parseInt(n);
// }
// console.log(sum);

//-------------------- Max Number lenght ---------------
let validNumber = false;
let sum = 0;
do {
  const number = prompt("Input the number of max 4 characters:");
  if (number.length === 4) {
    validNumber = true;
  }
  for (let i = 0; i < number.length; i++) {
    sum += parseInt(number.slice(i, i + 1));
  }
} while (!validNumber);
console.log(sum);
