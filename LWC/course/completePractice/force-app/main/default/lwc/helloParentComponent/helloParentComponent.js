import { LightningElement } from 'lwc';

export default class HelloParentComponent extends LightningElement {
  takeChild = true
  userNames = ['John', 'Smith','Mike', 'Jacob']
  fetchDetailHandler(){
    const elem = this.template.querySelector('h1')
    elem.style.border = "2px solid red"
    console.log(elem.innerText)
    const users = this.template.querySelectorAll('h2');
    Array.from(users).forEach(e => {
      e.setAttribute('title',e.innerText);
      console.log(e.innerText)    
    })
    
    //lwc:dom = "manual" demo
    const childElem = this.template.querySelector('.child')
    childElem.innerHTML = '<p> Hey I am a child element from lwc:dom</p>'

  }
}