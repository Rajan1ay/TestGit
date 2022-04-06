public with sharing class ToDoController {
    @AuraEnabled
    public static string addTodo(String payload){
        ToDO payloadObject = (ToDo) JSON.deserialize(payload, ToDO.class);
        SObject tsk = (SObject) Type.forName('ToDo__C').newInstance();
        tsk.put('Name', payloadObject.todoName);
        tsk.put('Done__c', payloadObject.done);
        insert tsk;
        return String.valueOf(tsk.Id);
        
    }

    @AuraEnabled
    public static void updateTodo(String payload){
        ToDO payloadObject = (ToDo) JSON.deserialize(payload, ToDO.class);
        SObject tsk = (SObject) Type.forName('ToDo__C').newInstance();
        tsk.put('Id', payloadObject.todoId);
        tsk.put('Name', payloadObject.todoName);
        tsk.put('Done__c', payloadObject.Done);
        update tsk;
        
    }

    @AuraEnabled
    public static void deleteTodo(String todoId){
        SObject tsk = (SObject) Type.forName('ToDo__C').newInstance();
        tsk.put('Id', todoId);
        delete tsk;
    }

    @AuraEnabled(cacheable=true)
    public static List<ToDo> getAllTodos(){
        List<SObject> tsks = Database.query('SELECT Id, Name, CreatedDate, Done__c FROM ToDo__c WHERE CreateDate = LAST_N_DAYS:7 OREDER BY CreatedDate DESC');
        return getToDos(tsks);
        
    }

    @AuraEnabled
    public static List<ToDo> getCurrentTodos(){
        List<SObject> tsks = Database.query('SELECT Id, Name, CreatedDate, Done__c FROM ToDo__c WHERE CreateDate = TODAY ORDER BY CreatedDate DESC');
        return getToDos(tsks);
        
    }

    @AuraEnabled
    public static List<ToDo> getToDos(List<SObject> tsks){
        List<ToDo> todos = new List<ToDO>();
        for(SObject tsk : tsks){
            ToDo todo = new ToDo();
            todo.todoId = tsk.Id;
            todo.todoName = String.valueOf(tsk.get('Name'));
            todo.todoDate = String.valueOf(tsk.get('CreatedDate'));
            todo.done = Boolean.valueOf(tsk.get('Done__c'));
            todos.add(todo);
        }
        return todos;
    }
//whatever we will pass from lightning component, it convert into todo object
//and same from apec to LWC
    class ToDo {
        @AuraEnabled
        public string todoId;
        @AuraEnabled
        public String todoName;
        @AuraEnabled
        public String todoDate;
        @AuraEnabled
        public Boolean done;

    }
}