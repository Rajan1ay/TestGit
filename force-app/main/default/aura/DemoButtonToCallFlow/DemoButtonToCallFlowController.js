({
	doInit : function(component, event, helper) {
		var recordId = component.get("v.recordId");
		var flow = component.find("flowData");
        alert("Demo1");
        alert(recordId);
       var inputVariables = [
        {
            name : 'myDemo',
            type : 'String',
            value : recordId
        },
         {
            name : 'assignSubject',
            type : 'String',
            value : 'Update IBM'
            }
       ];
        alert("Demo2");
        //flow.startFlow('Hello_world');
     flow.startFlow("Demo_Flow_from_Lightning_Component",inputVariables);
      alert("Demo3");    
    }
})