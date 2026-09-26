function sum(a, b) {
  return a + b
}
console.log(sum(4, 3))
const abSum = (a, b) => a + b
console.log(abSum(3, 2))

let arr = [1, 2, 3, 4, 5]
arr.forEach((e) => e * 2)

let arr2 = arr.map((e) => e + 10)
console.log(arr2)

//Problem Arrow functions is solving
let obj = {
  name: 'shr',
  getName() {
    console.log(this.name)
    function fullName() {
      console.log(this.name)
      console.log(`full name is ${this.name} on the object`)
    }
    const arrFullName = () =>
      console.log(`Arrow full name is ${this.name} on the object`)
    fullName()
    arrFullName()
  },
}

obj.getName()
