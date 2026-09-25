let arr = [1, 2, 3, 4, 4]
console.log(...arr)

function abc(x) {
  x.forEach((m) => {
    console.log(m * 2)
  })
}

abc([...arr])

let str = 'shruthin'
let v = [...str]

console.log(typeof v[1])

//1. Expanding string
let greeting = 'hello world'
let chars = [...greeting]
console.log(chars)

//2. Combining array
let arr1 = ['amazon', 'google']
let arr2 = ['facebook', 'insta']
let arr3 = [...arr1, ...arr2]
console.log(arr3)

//3. adding values to an array
let arr4 = ['a', 'b', ...arr1]
console.log(arr4)

//4. combining objects
let obj1 = { name: 'salesforce', age: 23 }
let obj2 = { name: 'insta', age: 32, ui: 34 }
let obj = { ...obj1, ...obj2 }
console.log(obj)

//5. Shallow copy
let arr10 = ['x', 'y', 'z']
arr10.push(20)
let arr11 = [...arr10]
console.log(arr11)

//6. Nested copy (spread operator fails)
let arrObj = [1, 3, [2, 4]]
arrObj[2].push(90)
let arrObj1 = [...arrObj]
console.log(arrObj1)

//Hack for nested copy
let arrObj2 = JSON.stringify(JSON.stringify(arrObj))
arrObj[2].push(91)

console.log(arrObj2)
