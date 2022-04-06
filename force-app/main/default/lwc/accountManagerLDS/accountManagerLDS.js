import { LightningElement, track, wire } from 'lwc';
import { createRecord, getRecord } from "lightning/uiRecordApi";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import Website_FIELD from '@salesforce/schema/Account.Website';
import Phone_FIELD from '@salesforce/schema/Account.Phone'; 

const filedArray=['Account.Name','Account.Phone','Account.Website'];


export default class accountManagerLDS extends LightningElement {
    @track accountName;
    @track accountPhone;
    @track accountWebsite;

    @track recordId;
   @wire(getRecord, {recordId: '$recordId', fields: filedArray})
   accountRecord;

    accountNameChangeHandler(event){
        this.accountName = event.target.value;
           }
    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
           }
    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
            }
    createAccount(){
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.accountName;
        fields[Website_FIELD.fieldApiName] = this.accountWebsite;
        fields[Phone_FIELD.fieldApiName] = this.accountPhone;
        alert(fields);
        const recordInput = {apiName : ACCOUNT_OBJECT.objectApiName , fields };
        alert(recordInput);
        createRecord(recordInput).then(response =>{
           this.recordId = response.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success'
                    })
                );
            }).catch(error => {
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: error,
                    variant: 'error'
                })
            );
        });
    }
  get retAccountName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }
    get retAccountPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }
    get retAccountWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }
}