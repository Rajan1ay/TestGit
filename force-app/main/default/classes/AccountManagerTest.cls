@isTest
public class AccountManagerTest {
  @isTest static void testAccountById() {
        Id recordId = createTestRecord();
        // Set up a test request
        RestRequest request = new RestRequest();
        request.requestUri ='https://mydomainrj-dev-ed.lightning.force.com/apexrest/Accounts/'+ recordId+'/contacts';
         //request.requestUri ='https://mydomainrj-dev-ed.lightning.force.com/apexrest/Accounts/'+ recordId;

        request.httpMethod = 'GET';
        RestContext.request = request;
        // Call the method to test
        Account acc = AccountManager.getAccount();
        // Verify results
        System.assert(acc != null);
        System.assertEquals('Rajan Apex Test', acc.Name);
    }
    static id createTestRecord(){
        Account acc = new Account();
        acc.Name = 'Rajan Apex Test';
         insert acc;
        Contact con = new Contact(
            accountId = acc.id,
        	lastName = 'Tester');
        insert con;
        return acc.Id;
    }
}