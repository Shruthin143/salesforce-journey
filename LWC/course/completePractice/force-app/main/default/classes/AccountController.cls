
public with sharing class AccountController {
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(){
        List<Account> accs =[select id, Name, Type, Industry from Account WITH USER_MODE limit 5];
        return accs;
    }
    @AuraEnabled(cacheable = true)
    /**
     * @description Retrieves accounts matching the specified industry.
     * @param industry The industry value to filter accounts by.
     * @return Accounts matching the specified industry.
     */
    public static List<Account> getEducationAccountList(string industry){
        List<Account> accs =[select id, Name, Type, Industry from Account where industry=:industry WITH USER_MODE];
        return accs;
    }
}