import { LightningElement, api } from 'lwc';

export default class UnitElevenChild extends LightningElement {
  _detail
  @api
  set detail(val){
    console.log(`value is ${val.name}`)
    this._detail = {...val, name:`Country ${val.name}`, place:'melbourne'};
    // this._nameObj = {...val}
    // this._detail = val.name;
  }

  get detail(){
    return this._detail;
  }

  onChangeHandler(){
    this.template.querySelector('.slds-card__footer').classList.remove('slds-hide')
  }
}