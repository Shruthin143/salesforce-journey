public with sharing class pdfController {
    @AuraEnabled
    public static Attachment generatePDF(Id recordId, string htmlData){
        PageReference page = Page.renderAsPDF;
        page.getParameters().put('pdfText', htmlData);

        Contact con = new Contact(Id = recordId);

        Attachment objAttachment = new Attachment();
        objAttachment.Name = 'invoice.pdf';
        objAttachment.ParentId = con.id;
        objAttachment.Body = page.getContentaspdf();
        objAttachment.IsPrivate = false;
        insert objAttachment;

        return objAttachment;
    }
}