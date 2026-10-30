import { LightningElement, api } from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader'
import {loadStyle} from 'lightning/platformResourceLoader'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import MOMENT from '@salesforce/resourceUrl/moment'
import USER_IMAGE from '@salesforce/resourceUrl/user_image';
import ANIMATE from '@salesforce/resourceUrl/animate';
import CONTENT from '@salesforce/contentAssetUrl/SFDX_CLI_Commands_pdf'
import LOCALE from '@salesforce/i18n/locale'
import CURRENCY from '@salesforce/i18n/currency'
import DESC_ONE from '@salesforce/label/c.descriptionOne'
import DESC_TWO from '@salesforce/label/c.descriptionTwo'
import hasViewAllData from '@salesforce/userPermission/ViewAllData'
import myCustomPermission from '@salesforce/customPermission/Show_Details'
import FORM_FACTOR from '@salesforce/client/formFactor'
import USER_ID from '@salesforce/user/Id'
import USER_IS_GUEST from '@salesforce/user/isGuest'

export default class Section15 extends LightningElement {
  //Getting record and object information, added it on Account record page for demo purpose
  @api
  recordId
  @api
  objectApiName

  //Static resource
  userImage = USER_IMAGE;

  //Content Asset file
  file = CONTENT;

  //Labels variables
  labels = {
    descOne : DESC_ONE,
    descTwo : DESC_TWO,
  }

  //Internationalization module variables
  number = 39438938.34343;
  formattedNumber = new Intl.NumberFormat(LOCALE, {style:'currency', currency:CURRENCY, currencyDisplay:'symbol'}).format(this.number);

  //From factor
  formFactor = FORM_FACTOR;

  //Getting user information about the current user, it gives only 'user Id' and 'isGuest'
  userId = USER_ID;
  userIsGuest = USER_IS_GUEST

  //Third party JS library and Css library
  currentDate='';
  isLibLoaded = false
  renderedCallback(){
    if(this.isLibLoaded){
      return;
    }else{
      Promise.all([
        loadStyle(this, ANIMATE+'/animate/animate.min.css'),
          loadScript(this, MOMENT+'/moment/moment.min.js')
        ])
        .then(() => {
          this.setDateOnScreen();
        })
        .catch(error => console.error(error));
        this.isLibLoaded= true;
    }

  }
  setDateOnScreen(){
      this.currentDate = moment().format('LLLL');
  }

  get hasViewAllDataAvailable(){
    let value = hasViewAllData ? 'true':'false';
    return value;
  }

  get customPermissionStatus(){
    let value = myCustomPermission ? 'true':'false'
    return value;
  }

  successToastHandler(){
    this.showToast('Title Success', 'Message', 'success')
  }
  showToast(toastTitle, toastMessage, toastVariant){
    const evt = new ShowToastEvent({
      title:toastTitle,
      message: toastMessage,
      variant: toastVariant
    });
    this.dispatchEvent(evt);
  }

}

