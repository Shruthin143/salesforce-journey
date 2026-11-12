import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/MapcontrollerLwc.getAccounts'
export default class Section23_maps_Demo extends LightningElement {
mapMarkers=[];
markersTitle="Accounts Location"
callmarkerHandler;
selectedmarkerValue;
@wire(getAccounts)
wireHandler({data, error}){
  if(data){
    this.formatResponse(data);
  }else{
    //console.log(error)
  }
}
formatResponse(data){
    this.mapMarkers = data.map(item => {
      return{
        location:{
          Street:item.Billingcity || '',
          City: item.BillingCity || '',
          PostalCode: item.BillingPostalCode || '',
          State: item.BillingState || '',
          CountryL: item.BillingCountry || ''
        },
        icon:'utility:Salesforce1',
        title:item.Name,
        value:item.Name,
        description:item.description
      }
    })
    this.selectedmarkerValue = this.mapMarkers.length && this.mapMarkers[0].value
  }
  callmarkerHandler(event){
    this.selectedmarkerValue = event.detail.selectedMarkerValue;
  }

}