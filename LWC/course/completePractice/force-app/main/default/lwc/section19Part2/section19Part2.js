import { LightningElement, wire } from 'lwc';
import {getRecord, getFieldValue, getFieldDisplayValue} from 'lightning/uiRecordApi'
import {getListUi} from 'lightning/uiListApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class Section19Part2 extends LightningElement {
  fieldsList = [NAME_FIELD, INDUSTRY_FIELD]
  getRecordInfo;
  nameValue
  nameDisplayValue
  industryValue
  industryDisplayValue
  listUi
  listUiColumns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'AccountName', fieldName: 'AccountName' },
    { label: 'Title', fieldName: 'Title' },
    { label: 'Phone', fieldName: 'Phone' },
    { label: 'Email', fieldName: 'Email' },
    { label: 'ContactOwnerAlias', fieldName: 'ContactOwnerAlias' }
];
  listUiData = [
    {
        'Name': 'John Smith',
        'AccountName': 'Global Tech',
        'Title': 'Software Engineer',
        'Phone': '0999990123',
        'Email': 'john.smith@example.com',
        'ContactOwnerAlias': 'jsmith'
    },
    {
        'Name': 'Priya Sharma',
        'AccountName': 'ABC Solutions',
        'Title': 'Sales Manager',
        'Phone': '0987654321',
        'Email': 'priya.sharma@example.com',
        'ContactOwnerAlias': 'psharma'
    },
    {
        'Name': 'Rahul Kumar',
        'AccountName': 'Innovate Corp',
        'Title': 'Business Analyst',
        'Phone': '0912345678',
        'Email': 'rahul.kumar@example.com',
        'ContactOwnerAlias': 'rkumar'
    },
    {
        'Name': 'Sneha Reddy',
        'AccountName': 'Tech World',
        'Title': 'Project Manager',
        'Phone': '0976543210',
        'Email': 'sneha.reddy@example.com',
        'ContactOwnerAlias': 'sreddy'
    },
    {
        'Name': 'Arjun Patel',
        'AccountName': 'Future Systems',
        'Title': 'Technical Consultant',
        'Phone': '0967890123',
        'Email': 'arjun.patel@example.com',
        'ContactOwnerAlias': 'apatel'
    }
];

  // @wire(getRecord, {recordId: '001gL00001P35SWQAZ',layoutTypes:['Full'], modes:['View']})
  @wire(getRecord, {recordId: '001gL00001P35SWQAZ', fields:'$fieldsList'})
  getRecordFun({data, error}){
    if(data){
      this.getRecordInfo = data;
      this.nameValue = getFieldValue(data, NAME_FIELD)
      this.industryValue = getFieldValue(data, INDUSTRY_FIELD)
      this.nameDisplayValue = getFieldDisplayValue(data, NAME_FIELD)
      this.industryDisplayValue = getFieldDisplayValue(data, INDUSTRY_FIELD)
    }else{
      console.log('---------Error----------'+error)
    }
  }

  @wire(getListUi, {objectApiName: CONTACT_OBJECT, listViewApiName: 'AllContacts'})
  getListFun({data, error}){
    if(data){
      console.log(data)
      this.listUi = data;
      if(data.info.displayColumns){
        console.log(data.info.displayColumns)
        // this.listUiColumns= this.columnsFun(data.info.displayColumns);
      } 
    }else{
      console.log(error)
    }
  }

  columnsFun(data){
    let reformedMap =  data.map(item => {
      const obj = {"fieldApiName":item.fieldApiName, "label":item.label}
      return obj
    })
    console.log(reformedMap)
    return reformedMap
  }

  // dataFun(data){
  //   return data.records.records.map(item => {
  //     const obj = {item.}
  //   })
  // }

}