import { LightningElement } from 'lwc';

export default class UnitElevenParent extends LightningElement {
  users = ['shr', 'vhr'];
  parentValue={
    name: "India",
    age:10
  };

  handleInputChange(event){
    this.parentValue = { ...this.parentValue, name: event.target.value };
    console.log('name in parent ' + this.parentValue.name)
  }
}