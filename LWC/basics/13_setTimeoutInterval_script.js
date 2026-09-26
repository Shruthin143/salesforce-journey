function test() {
  console.log('this is through setTimeout')
}

let timePassed = 0
function testInterval() {
  timePassed += 1
  console.log('this is through setTimeInterval')
  console.log(timePassed)
}

setTimeout(test, 3000)

let timerId = setInterval(testInterval, 2000)

clearInterval(timerId)
