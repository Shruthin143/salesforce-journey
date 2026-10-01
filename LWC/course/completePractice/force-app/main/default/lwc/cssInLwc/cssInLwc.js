import { LightningElement } from 'lwc';

export default class CssInLwc extends LightningElement {

  renderedCallback(){
    const style = document.createElement('style');
    style.innerText = `c-shadow-dom-styling .slds-button{
    background: red;
    color: white}`

    this.template.querySelector('lightning-button').appendChild(style)

  }
  slideChangehandler(event){
    const sliderValue = event.detail.value
    const elem = this.template.querySelector('.alertBar');
    elem.style.width = `${sliderValue}%`;
  }


}