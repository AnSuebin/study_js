let output = ''
for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    output += '*'
  }
  output += '\n'
}
console.log(output)
