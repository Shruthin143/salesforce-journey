import { LightningElement } from 'lwc';

export default class CompComMain extends LightningElement {
  parentMessage;
  complexData = [{
                      name: "shr",
                      age:33
                  },
                  {
                      name: "vhr",
                      age:34
                  },
              ]

  messageHandler(event){
    this.parentMessage = event.target.value;
  }

  callChildMethod(){
    const elem = this.template.querySelector('c-comp-com-child');
    elem.childmethod();
  }

  parentHelloHandler(event){
    console.log('Got message from Child to Parent');
    console.log(event.detail.message);
  }

  // connectedCallback() {

  //     this.template.addEventListener('hello',this.parentHelloHandler);

  // }
}