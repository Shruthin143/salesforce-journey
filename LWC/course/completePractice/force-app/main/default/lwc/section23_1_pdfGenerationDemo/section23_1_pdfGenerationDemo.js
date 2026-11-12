import { LightningElement, api } from 'lwc';
import generatePDF from '@salesforce/apex/pdfController.generatePDF';

export default class Section23_1_pdfGenerationDemo extends LightningElement {
  @api recordId;
  imageUrl = 'https://www.sparksuite.com/images/logo.png'
  invoiceData = {
    invoiceNo: "1000",
    inoviceCreated: "2026-11-08",
    invoiceDue: "2026-12-08",
    CompanyName: "TechNova Solutions Pvt Ltd",
    address1: "123 MG Road, Whitefield",
    address2: "Bangalore, Karnataka, 560066"
  };
  clientData = {
    client: 'Acme Corp',
    username: 'John Doe',
    email: 'john@example.com'
  }
  services = [
    {name:'Consultant fee', amount:1000},
    {name:'Website design', amount:3000},
    {name:'Hosting fee', amount:100},
  ]

  get totalAmount(){
    return this.services.reduce((cur, service) => {
      return cur = cur+service.amount;
    },0)
  }

  pdfHandler(){
    let content = this.template.querySelector('.container');
    console.log(content.outerHTML)
    generatePDF({recordId: this.recordId, htmlData: content.outerHTML})
    .then(result => {
      window.open(`https://shrud-dev-ed.develop.file.force.com/servlet/servlet.FileDownload?file=${result.Id}`);
      console.log(result)
    }).catch(err => console.log(err));
  }
}