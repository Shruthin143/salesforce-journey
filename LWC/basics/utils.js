const PI = 3.14
const PI_DATA = 4

function add(a, b) {
  return a + b
}

//export together
export { PI, add }

//export with alia
// export {PI_DATA as PI, add}

//export with default
export default function minus(a, b) {
  console.log(a - b)
}
