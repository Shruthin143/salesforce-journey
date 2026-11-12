public with sharing class mapControllerLwc {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
        return [Select id, Name, description, BillingStreet, BillingCountry, BillingCity, BillingState, BillingPostalCode
                from Account ORDER BY Name limit 10];
   }
}