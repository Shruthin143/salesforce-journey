const heading = document.querySelector('.heading')
console.log(heading)
const handler = function () {
  alert('heading clicked')
}
heading.addEventListener('click', handler)

function firstFunction() {
  console.log('clicked me')
  heading.removeEventListener('click', handler)
}

function btnClicked() {
  console.log('clicked me')
}
function firstClicked() {
  console.log('clicked the first div')
}

// document.querySelector('.btn').addEventListener('click', btnClicked)
// document.querySelector('.first').addEventListener('click', firstClicked)

function callCustomMethod() {
  let event = new CustomEvent('hello', {
    detail: { name: 'shruthin' },
  })
  document.querySelector('.second').dispatchEvent(event)
  document.querySelector('.first').dispatchEvent(event)
}
document.querySelector('.btn').addEventListener('click', callCustomMethod)

document.querySelector('.first').addEventListener('hello', function (data) {
  console.log('hello passed the data to first ' + data.detail.name)
})
document.querySelector('.second').addEventListener('hello', function (data) {
  console.log('hello passed the data to second ' + data.detail.name)
})
// const button = document.querySelector('.btn')
// console.log(button)
// let eve = new CustomEvent('bye')

// button.addEventListener('bye', (e) => console.log('test better'))
// document.addEventListener('bye', (e) => console.log('test document'))
// document.dispatchEvent(eve)

const doubleButton = document.querySelector('.double')
function doubleClickFun() {
  let doubleEvent = new CustomEvent('custom:double', {
    detail: { hello: 'Double clicked' },
    bubbles: true,
  })

  doubleButton.dispatchEvent(doubleEvent)
  // document.dispatchEvent(doubleEvent)
}
doubleButton.addEventListener('click', doubleClickFun)
doubleButton.addEventListener('custom:double', (e) => console.log(e.detail))
document.addEventListener('custom:double', (e) => console.log(e.detail))
