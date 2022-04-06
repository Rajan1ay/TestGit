import { LightningElement, track } from 'lwc';

export default class AccountRecordForm1 extends LightningElement {
    @track recordId;
   
    handleSuccess(event){
        this.recordId = event.detail.id;
    }
}