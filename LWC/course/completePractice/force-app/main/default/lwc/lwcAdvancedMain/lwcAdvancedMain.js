import { LightningElement } from 'lwc';
import test from './test.html'

export default class LwcAdvancedMain extends LightningElement {
  name;
  showComponent = true;
  useTestTemplate = false;
  constructor(){
    super();
    this.name = 'shruthin';
    console.log('1.Constructor')
  }


  clickTemplateHandler(){
    this.showComponent = !this.showComponent;
  }

  connectedCallback(){
    const elem = this.template.querySelector('h1');

    console.log('2.Connected Callback')
    console.log(`From Connected Callback trying to print h1 element ${elem}`)
  }

  render(){
    if (this.showComponent){
      return test;
    }
    return super.render();
  }
  renderedCallback(){
    console.log('3.Rendered Callback')
    const elem = this.template.querySelector('h1');
    console.log(`From rendered Callback trying to print h1 element ${elem.innerText}`)
  }

  disconnectedCallback(){
    console.log('4. Disconnected Callback')
    console.log('Button is clicked and disconnetedCallback is executed')
  }

  clickHandler(){
    const btn = this.template.querySelector('.btn');
    this.showComponent = false;
  }
  errorCallback(error, stack){
    console.log('Error message is '+ error.message);
    console.log(stack)
  }
}