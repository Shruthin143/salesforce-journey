import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
import TYPE_FIELD from '@salesforce/schema/Account.Type'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class Section18 extends LightningElement {
  objectName= ACCOUNT_OBJECT;
  fieldList = [NAME_FIELD, ANNUAL_REVENUE_FIELD,TYPE_FIELD,INDUSTRY_FIELD];
  // fieldsForRecordEditForm ={
  //   accountName: NAME_FIELD,
  //   annualRevenue: ANNUAL_REVENUE_FIELD,
  //   type: TYPE_FIELD,
  //   industry: INDUSTRY_FIELD
  // }
  recordId = '001gL00001P35STQAZ';
  inputValue;
  successHandler(event){
    console.log(event.detail.id);

    const toastEvent = new ShowToastEvent({
      title: "Account Created",
      message: "Record Id: "+event.detail.id,
      variant: "success"
    })
    this.dispatchEvent(toastEvent);

  }

  handleReset(){
    const fieldElements = this.template.querySelectorAll("lightning-input-field");
    if(fieldElements){
      Array.from(fieldElements).forEach((elem) => elem.reset());
    }
  }

  handleNumberOfEmployeesChange(e){
    console.log(e.target.value)
    this.inputValue = e.target.value;
  }
  handleSubmitValidation(event) {
    event.preventDefault();

    const inputCmp = this.template.querySelector(
        'lightning-input[name="NumberOfEmployees"]'
    );

    const employeeCount = Number(inputCmp.value);

    if (inputCmp.value === '' || employeeCount <= 0) {
        inputCmp.setCustomValidity(
            'Number of Employees must be greater than 0'
        );

        inputCmp.reportValidity();
        return;
    }

    inputCmp.setCustomValidity('');
    inputCmp.reportValidity();

    const fields = event.detail.fields;

    fields.NumberOfEmployees = employeeCount;

    this.template
        .querySelector('lightning-record-edit-form')
        .submit(fields);
}
}