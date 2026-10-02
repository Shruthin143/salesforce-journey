import { LightningElement } from 'lwc';

export default class LwcAdvancedChild extends LightningElement {

  connectedCallback(){
    console.log('from chile connectedCallback');
    // throw new Error('Loading of child component failed')
  }
  disconnectedCallback(){
    console.log('Hiding the Child Component')
  }

}