import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList'

export default class Section23_FilteringAndSorting extends LightningElement {
  headings=[
    { label: "Id", fieldName: "Id" },
    { label: "Name", fieldName: "Name",sortable: true },
    { label: "Email", fieldName: "Email", type: "email"},
    { label: "Title", fieldName: "Title"},
  ]
  fullTableData =[]
  filteredData =[]
  searchKey
  @wire(getContactList)
  contactHandler({data,error}){
    if(data){
      console.log(data);
      this.fullTableData = data;
      this.filteredData= data.map(item => {
        return {
          Id: item.Id,
          Name: item.Name,
          Title:item.Title,
          Email: item.Email
        }
      })
    }else{
      console.log(error)
    }
  }

  handleSearchChange(event){
    this.searchKey = event.target.value;
  }
  handleFilterChange(){

    this.filteredData = this.fullTableData.filter(obj => {
      return Object.keys(obj).some(key =>{
        return obj[key].toLowerCase().includes(this.searchKey)
      })
    })
  }


}