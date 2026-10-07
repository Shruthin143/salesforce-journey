import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
  @api title;

  sendMessageToAura(){
    const event = new CustomEvent('message', {
      detail:{
        title:"this is message from Lwc to Aura"
      }
    })

    this.dispatchEvent(event);
  }
}