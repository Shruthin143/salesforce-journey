import { LightningElement } from 'lwc';
import {loadScript} from 'lightning/platformResourceLoader'
import MOMENT from '@salesforce/resourceUrl/moment'
import USER_IMAGE from '@salesforce/resourceUrl/user_image';

export default class Section15 extends LightningElement {
  userImage = USER_IMAGE;
  currentDate='';
  isLibLoaded = false
  renderedCallback(){
    if(this.isLibLoaded){
      return;
    }else{
      Promise.all([
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
}

