import { LightningElement, wire } from 'lwc';
import {getRecord, getFieldValue, getFieldDisplayValue, getRecordUi, createRecord} from 'lightning/uiRecordApi'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import {getListUi} from 'lightning/uiListApi'
import {getNavItems} from 'lightning/uiAppsApi'
import {updateRecord} from 'lightning/uiRecordApi'
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'
const  cols=[
    {label: 'Id',fieldName:'Id'},
    {label: 'Name',fieldName:'Name'},
    {label: 'Title',fieldName:'Title'},
    {label: 'Phone',fieldName:'Phone',editable:'true'},
    {label: 'Email',fieldName:'Email',type:'tel', editable:'true'}
  ]
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
  getNavItemValue
  getRecordUiValue
  getRecordUiFields=[
    {fieldName:"AccountNumber","label":"Account Number"},
    {fieldName:"AnnualRevenue","label":"Annual Revenue"},
    {fieldName:"Industry","label":"Industry"},
    {fieldName:"Name","label":"Name"},
  ]
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

  @wire(getListUi, {objectApiName: CONTACT_OBJECT, listViewApiName: 'AllContacts', pageSize:10})
  getListFun({data, error}){
    if(data){
      this.listUi = data;
      if(data.info.displayColumns){
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
    return reformedMap
  }

  @wire(getNavItems, {
    pageSize: 30
  })
  navItemsHandler({data, error}){
    if(data){
      this.getNavItemValue = data
      // console.log(data)
    }else{
      console.log(error)
    }
  }

  @wire(getRecordUi, {recordIds:'001gL00001P35SWQAZ', layoutTypes:'Full',modes:'Edit'})
  accountRecordUiHandler({data, error}){
    if(data){
      // console.log(data)
      this.getRecordUiValue = data;
      this.getRecordUiFields = this.getRecordUiFields.map(item => {
        return {...item, value:data.records['001gL00001P35SWQAZ'].fields[item.fieldName].value}
      })
    }else{
      console.log(error)
    }

  }
  contactFormFields={}
  changeHandler(event){
    const{name,value} = event.target;
    this.contactFormFields[name] = value;
  }

  createContact(){
    const recordInput = {apiName: CONTACT_OBJECT.objectApiName, fields:this.contactFormFields }
    createRecord(recordInput).then(result => {
      this.showToast('Success!!', 'Successfully created Contact', 'Success')
      this.template.querySelector('form.createForm').reset();
      this.contactFormFields={};
    }).catch(err => {
      console.log(err)
      this.showToast('Error creating Contact', err.body.message, 'error')
    })
  }

  showToast(title, message, variant){
    this.dispatchEvent(new ShowToastEvent({
      title,
      message,
      variant
    }))
  }

  contacts
  columns = cols
  draftValues=[]
  updateList
  @wire(getListUi, {
    objectApiName: CONTACT_OBJECT,
    listViewApiName: 'AllContacts'
  })
  listViewHandler({data, error}){
    if(data){
      if(data.records.records){
        this.contacts = data.records.records.map(item => {
          return {
              "Id": this.getValue(item, 'Id'),
              "Name": this.getValue(item, 'Name'),
              "Title": this.getValue(item, 'Title'),
              "Phone": this.getValue(item, 'Phone'),
              "Email": this.getValue(item, 'Email'),
          }        
          console.log(this.contacts)
        })
      }
      console.log(data)
      this.updateList = data
    }else{
      console.log(error)
    }
  }

  getValue(data, field){
    return data.fields[field].value
  }

  handleSave(event){
    console.log(event.detail)
    
    updateRecord()
  }
}