import { LightningElement } from 'lwc';
// import * as modal from 'c/modal.js'

export default class Section23ModalWrapper extends LightningElement {
  isOpen =false
  openHandler(){
    this.isOpen = true;
  }

  closeHandler(){
    this.isOpen = false;
  }


}