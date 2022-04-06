import { LightningElement, track } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement {

    @track recordId;
    successHandler(event){
        this.recordId = event.detail.id;
       //here we ll get the recent record id which save to back end and this recordId we are 
       //using in record-edit-view-form.
    }
}