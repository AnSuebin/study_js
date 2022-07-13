const max = function (front, ...backs) {
  let output
  let items
  if (Array.isArray(front)) {
    output = front[0]
    items = front
  } else if (typeof front === 'number') {
    output = front
    items = backs
  }
  for (const item of items) {
    if (output < item) {
      output = item
    }
  }
  return output
}

console.log(`max(배열): ${max([52, 273, 32, 103, 275, 24, 57])}`)
console.log(`max(숫자): ${max(52, 273, 32, 103, 275, 24, 57)}`)
