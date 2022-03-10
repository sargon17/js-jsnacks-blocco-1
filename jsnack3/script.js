const number = prompt("Input any lenght number:");

// let n = String(number).slice(0, 1);

let sum = 0;
for (let i = 0; i < number.length; i++) {
  let n = String(number).slice(i, i + 1);
  sum += parseInt(n);
}

console.log(sum);
