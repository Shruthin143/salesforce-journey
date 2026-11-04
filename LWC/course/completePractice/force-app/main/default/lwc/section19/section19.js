import { LightningElement, wire} from 'lwc';
import USER_ID from '@salesforce/user/Id';
import { getRecord } from 'lightning/uiRecordApi'; 
import { getObjectInfo } from 'lightning/uiObjectInfoApi'; 
import { getObjectInfos, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi'; 
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import NAME_FIELD from '@salesforce/schema/User.Name'
import Email_FIELD from '@salesforce/schema/User.Email'
import RATING_FIELD from '@salesforce/schema/Account.Rating'
const fields = [NAME_FIELD, Email_FIELD];
export default class Section19 extends LightningElement {
  
  userId = USER_ID;
  userInfo;
  accountInfo;
  objectsInfo;
  objectsInfoAccount;
  objectsInfoOpportunity;
  picklistValues
  picklistValuesByRecordType
  picklistValuesByRecordTypeValue
  ratingOptions

  @wire(getRecord, {
    recordId: '$userId',
    fields
  })
  userRecord;


  @wire(getRecord, {
    recordId: '$userId',
    fields: ['User.Name','User.Email']
  })
  userInfo({data, error}){
    // console.log(results);
    if(data){
      this.userInfo = data.fields;
    }else{
      console.log(error);
    }
  }

  @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
  accountFunction({data, error}){
    if(data){
      this.accountInfo = data
      // console.log(this.accountInfo)
    }else{
      console.log(error)
    }
  }
  @wire(getObjectInfos, {
    objectApiNames: [ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]
  })
  objsFunction({ data, error }) {
      if (data) {
          this.objectsInfo = data;
          for (let i = 0; i < data.results.length; i++) {
              if (data.results[i].result.apiName == 'Account') {
                  this.objectsInfoAccount = data.results[i].result;
              } else if (data.results[i].result.apiName == 'Opportunity') {
                  this.objectsInfoOpportunity = data.results[i].result;
              }
          }
      } else if (error) {
          console.log(error);
      }
  }

  @wire(getPicklistValues, {recordTypeId: '$accountInfo.defaultRecordTypeId', fieldApiName: RATING_FIELD})
  pickFunction({data, error}){
    if(data){
      this.picklistValues = data.values;

    }else{
      console.log(error)
    }
  }
  @wire(getPicklistValuesByRecordType, {recordTypeId: '$accountInfo.defaultRecordTypeId', objectApiName: ACCOUNT_OBJECT})
  picklistAllValuesFunction({data, error}){
    if(data){
      console.log(data);
      this.picklistValuesByRecordType = data;
      this.ratingOptions = this.picklistValuesGenerator(data.picklistFieldValues.Rating);
    }else{
      console.log(error)
    }
  }

  picklistGenerator(data){

  }

  picklistValuesByRecordTypeChangeHandler(event) {
      this.picklistValuesByRecordTypeValue = event.detail.value;
  }

  picklistValuesGenerator(data){
    return data.values.map(item => ({"label": item.label, "value":item.value}))
  }
}
