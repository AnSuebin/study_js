/*
let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]
numbers = numbers
  .filter((value) => value % 2 === 1)
  .filter((value) => value <= 100)
  .filter((value) => value % 5 === 0)

console.log(numbers)
*/

let numbers = [273, 25, 75, 52, 103, 32, 57, 24, 76]
function filter() {
  let filterNumber = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 1 && numbers[i] <= 100 && numbers[i] % 5 === 0) {
      let finallNumber = numbers[i]
      filterNumber.push(finallNumber)
    }
  }
  return filterNumber
}

console.log(filter(numbers))
