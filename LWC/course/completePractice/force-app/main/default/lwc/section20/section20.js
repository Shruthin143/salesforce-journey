import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
import getEducationAccountList from '@salesforce/apex/AccountController.getEducationAccountList'

export default class Section20 extends LightningElement {
  accountFromFunction;
  accountsWithParams
  selectedIndustry = 'Education'
  @wire(getAccountList)
  accounts

  @wire(getAccountList)
  accountsFun({data, error}){
    if(data){
      this.accountFromFunction = data;
      console.log(data)
      if(this.accounts.data) console.log(this.accounts);
    }else{
      console.log(error)
    }
  }

  @wire(getEducationAccountList, {industry: '$selectedIndustry'})
  accountsWithParamsFun({data, error}){
    if(data){
      console.log(data);
      this.accountsWithParams = data;

    }else{
      console.log(error);
    }
  }

  get industryOptions(){
    return [
      {label: "Education", value:"Education"},
      {label: "Energy", value:"Energy"}
    ]
  }

  handleIndustryChange(event){
    this.selectedIndustry = event.target.value;
  }


  ///Calling method imperatively
  imperativeAccounts
  handleClick(){
    getAccountList().then(res => {
      console.log(res);
      this.imperativeAccounts = res;
    }).catch(err => {
      console.error(error)
    })
  }
  imperativeAccountsParams
  searchKey
  handleClickParams(){
    getEducationAccountList({industry: this.searchKey}).then(res => {
      console.log(res);
      this.imperativeAccountsParams = res;
    }).catch(err => {
      console.error(err);
    })
  }
  handleSearchKeyChange(event){
    console.log(event.target.value)
    this.searchKey = event.target.value;
  }
}