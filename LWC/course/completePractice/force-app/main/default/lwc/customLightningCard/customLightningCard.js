import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {
  slotChangeHandler(){
    this.template.querySelector('footer')?.classList.remove('slds-hide')
  }
}