import { LightningElement, wire } from 'lwc';
import {NavigationMixin, CurrentPageReference} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'

export default class Section16 extends NavigationMixin(LightningElement) {
  @wire(CurrentPageReference)
  pageRef

  get currPageRef(){
    return this.pageRef ? JSON.stringify(this.pageRef) : 'Nothing'
  }
  navigateToHome(){
    this[NavigationMixin.Navigate]({
      type: 'standard__namedPage',
      attributes:{
        pageName: 'home'
      }
    })
  }
  navigateToChatter(){
    this[NavigationMixin.Navigate]({
      type: 'standard__namedPage',
      attributes:{
        pageName: 'chatter'
      }
    })
  }
  navigateToNewRecord(){
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes:{
        objectApiName: 'Contact',
        actionName: 'new'
      }
    })
  }
  navigateToNewRecordWithDefaults(){
    const defaultvalues = encodeDefaultFieldValues({
      FirstName: 'Stocks',
      LastName: 'Test',
      Leadsource: 'Other'
    })
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes:{
        objectApiName: 'Contact',
        actionName: 'new'
      },
      state:{
        defaultFieldValues: defaultvalues
      }
    })
  }

  navigateToContactsList(){
    this[NavigationMixin.Navigate]({
      type: 'standard__objectPage',
      attributes:{
        objectApiName: 'Contact',
        actionName: 'list'
      },
      state:{
        filterName:  'Recent'
      }
    })
  }

  navigateToFiles(){
      this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'ContentDocument',
            actionName: 'list'
        }
    });
    }
  navigateToRecord() {
    this[NavigationMixin.Navigate]({
        type: 'standard__recordPage',
        attributes: {
            recordId: '003gL000012FNM1QAO',
            objectApiName: 'Contact',
            actionName: 'edit'
        }
    });
}

  navigateToTab(){
    this[NavigationMixin.Navigate]({
        type: 'standard__navItemPage',
        attributes: {
            apiName: 'LWC_Fundamentals',
        }
    });
  }

  navigateToRelatedRecord(){
    this[NavigationMixin.Navigate]({
        type: 'standard__recordRelationshipPage',
        attributes: {
            recordId: '001gL00001P35STQAZ',
            objectApiName: 'Account',
            relationshipApiName: 'Contacts',
            actionName: 'view'
        }
    });
  }
  navigateToWebpage(){
    this[NavigationMixin.Navigate]({
        type: 'standard__webPage',
        attributes: {
              url: 'https://chatgpt.com/chat'
        }
    });
  }
  navigateToLWCPage(){
    let defination={
      componentDef: 'c:section15'
    }
    this[NavigationMixin.Navigate]({
        type: 'standard__webPage',
        attributes: {
              url: '/one/one.app#'+btoa(JSON.stringify(defination))
        }
    });
  }
  
  navigateToAuraComponent(){

    this[NavigationMixin.Navigate]({
        type: 'standard__component',
        attributes: {
              componentName: 'c:AuraLwcCommunication'
        }
    });
  }
}