public class BatchDemoTest implements Database.Batchable<SObject>{
    
    public Database.QueryLocator start(Database.BatchableContext bc){
       // 1 million -- 2000 records to execute.
       System.debug('start : 1');
        return Database.getQueryLocator('Select id, Name from Account');
        // Database.getQueryLocator won't hit exception ( governer limit ) if it has 1M record also . it's differnet
        // from norma apex query. in that query you will not able to query more record.
        
    }
    public void execute(Database.BatchableContext bc,List<Account> subListFromStartMethod){
        // Once execute method process 2k again it will come back to execute and process fresk 2k records
        // if you know the account pass in Sobject. 
        // example update all account as pre fix as Batch Update.
        // logic
         System.debug('execute : 1');
        for(Account acc: subListFromStartMethod){
            acc.name = 'Batch Update -' + acc.name;
        }
        update subListFromStartMethod;
    }	
    public void finish(Database.BatchableContext bc){
        //Post process logic
        System.debug('Batch Job Completed');
        
    }
   }