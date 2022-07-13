/*
let output = ''
for (let i = 1; i <= 14; i++) {
  output += ' '.repeat(14 - i) + '*'.repeat(2 * i - 1) + '\n'
}

console.log(output)
*/

/*
let output = ''
for (let a = 1; a <= 5; a++) {
  for (let b = 1; b <= 6 - a; b++) {
    output += ' '
  }
  for (let c = 1; c <= 2 * a - 1; c++) {
    output += '*'
  }
  output += '\n'
}
for (let d = 1; d <= 4; d++) {
  for (let e = 1; e <= d + 1; e++) {
    output += ' '
  }
  for (let f = 1; f <= 2 * (5 - d) - 1; f++) {
    output += '*'
  }
  output += '\n'
}
console.log(output)
*/

/*
let output = ''
for (let i = 1; i <= 5; i++) {
  output += ' '.repeat(5 - i) + '*'.repeat(2 * i - 1) + '\n'
}
for (let k = 1; k <= 4; k++) {
  output += ' '.repeat(k) + '*'.repeat(9 - 2 * k) + '\n'
}
console.log(output)
*/
/*
let output = ''
for (let i = 2; i <= 9; i++) {
  for (let k = 1; k <= 9; k++) {
    output += i + 'x' + k + '=' + i * k + '\n'
  }
}
console.log(output)

*/

let output = ''
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= i; k++) {
    output += '*'
  }
  output += '\n'
}
console.log(output)
