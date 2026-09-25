let arr = [2, 3, 4, 5, 6, 7, 10]

//map()
let arrDouble = arr.map((e) => e * 2)
console.log(`map is ${arrDouble}`)

//filter()
let arrFilter = arr.filter((e) => e > 5)
console.log(arrFilter)

//every()
let every = arr.every((e) => e < 5)
console.log(every)

//some()
let some = arr.some((e) => e < 100)
console.log(some)

//sort()
let sort = arr.sort((a, b) => b - a)
console.log(sort)

//reduct()
let reduce = arr.reduce((total, cur) => total + cur, 100)
console.log(reduce)

//forEach()
arr.forEach((e) => e + 10)
console.log(arr)
