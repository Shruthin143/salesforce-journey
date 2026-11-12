import { LightningElement } from 'lwc';

export default class Modal extends LightningElement {
  closeModal(){
    const event = new CustomEvent('close',{
      detail:{
        value: 'false'
      }
    })
    this.dispatchEvent(event);
  }
}