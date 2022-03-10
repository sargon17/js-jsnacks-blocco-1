const oddNumbers = [];

for (let i = 0; i < 6; i++) {
  let number = prompt("Input a number:");
  if (number % 2 !== 0) {
    oddNumbers.push(number);
  }
}
console.log(oddNumbers);
