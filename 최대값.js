const max = function (array) {
  let output = array[0]
  for (const item of array) {
    if (output < item) {
      output = item
    }
  }
  return output
}

console.log(max([1, 2, 3, 4]))
