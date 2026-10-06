import { LightningElement, api } from 'lwc';

export default class CompComChild extends LightningElement {
    @api message;
    @api complex;

    @api childmethod(){
      console.log('Printing from child component')
    }

    helloHandle(){
      const event = new CustomEvent('hello', {
            detail: {
                message: 'Hello from Child'
            },
            bubbles: true,
            composed: true
        });

        this.dispatchEvent(event);
    }

    
}