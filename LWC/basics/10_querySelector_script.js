'use strict'

let elem = document.querySelector('div')
console.log(elem)
console.log('test')

let elems = document.querySelectorAll('div') //nodelist
console.log(elems)
Array.from(elems).forEach((el) => (el.style.color = 'green'))
