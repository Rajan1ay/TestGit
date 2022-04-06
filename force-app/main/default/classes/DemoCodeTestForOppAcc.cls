public class DemoCodeTestForOppAcc {
	@InvocableMethod
    public static void testOppAccIdPopulate(){
        System.debug('enter in class');
        Opportunity o1 = new Opportunity();
        o1.AccountId__c = o1.AccountId;
        update o1;
    }
}