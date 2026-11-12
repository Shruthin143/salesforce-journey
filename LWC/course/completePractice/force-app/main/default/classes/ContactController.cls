public with sharing class ContactController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        return [Select id, name, Title, email from Contact];

    }
}