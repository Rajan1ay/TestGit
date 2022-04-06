//To cover apex trailhead of rest API https://trailhead.salesforce.com/en/content/learn/modules/apex_integration_services/apex_integration_webservices
//no use of this class moved logic to account manager.
@RestResource(urlMapping='/Case/*')
global with sharing class MyRestResource {
    @HttpGet
    global static Case getAccount() {
         RestRequest request = RestContext.request;
         System.debug('Request:-'+ request);
        // grab the accountId from the end of the URL
        String caseId = request.requestURI.substring(
          request.requestURI.lastIndexOf('/')+1);
          Case caseDetails = [Select Id from Case where Id = : caseId ];
        return caseDetails;
    }
}

/*public with sharing class AccountManager {
    //@AuraEnabled(cacheable=true) it's needs only when we wired 
    //the property so that for same request it won't call server ..it ll manage from cache
    @AuraEnabled
    public static List<Account> getAccountDetails(Integer noofAccounts) {
        return [select Id, Name, Phone from Account Limit :noofAccounts];
    }
 
}*/