import { LightningElement, track } from 'lwc';

export default class MyFormLWC extends LightningElement {
    @track fName;
    @track lName;

    handleFirstName(event){
        this.fName=event.target.value;
              
         }
     handleLastName(event){
        this.lName=event.target.value;
    }        
     
        
    submitDetails(){    
        alert("Details");
       
    }
}