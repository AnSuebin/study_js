let numbers1 = [273, 25, 75, 52, 103, 32, 57, 24, 76]
numbers1 = numbers1
  .filter((value) => value % 2 === 1)
  .filter((value) => value <= 100)
  .filter((value) => value % 5 === 0)

console.log(numbers1)

let numbers2 = [273, 25, 75, 52, 103, 32, 57, 24, 76]
function filter() {
  let filterNumber = []
  for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 1 && numbers2[i] <= 100 && numbers2[i] % 5 === 0) {
      let finallNumber = numbers2[i]
      filterNumber.push(finallNumber)
    }
  }
  return filterNumber
}

console.log(filter(numbers2))

let numbers3 = [273, 25, 75, 52, 103, 32, 57, 24, 76]
function filterlist() {
  let filterNumber = []
  numbers[i] % 2 === 1 && numbers2[i] <= 100 && numbers2[i] % 5 === 0
    ? filterNumber.push(numbers3[i])
    : console.log('nothing')
}

console.log(filter(numbers3))
