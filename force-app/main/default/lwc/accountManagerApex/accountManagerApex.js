import { LightningElement, track } from 'lwc';
import getAllAccount from '@salesforce/apex/MyRestResource.getAccountDetails';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class AccountManagerApex extends LightningElement {

   // @wire(getAllAccount)
    //accounts;
@track accounts;
@track noOfAccounts;
get responseReturned(){
    if(this.accounts){
        return true;
    }
    return false;
}

noOfAccountHandler(event){
    this.noOfAccounts = event.target.value;
}

getAccounts(){
    getAllAccount({noofAccounts:this.noOfAccounts}).then(response=>{
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
                title : 'Accounts Loaded',
                message : this.noOfAccounts  +  ' Accounts fetched from server',
                variant : 'Success',
            });
            this.dispatchEvent(toastEvent);
    }).catch(error=>{
        console.log('Error in getting the account', error.body.message);
        const toastEvent = new ShowToastEvent({
            title : 'Error',
            message : error.body.message,
            variant : 'error',
        });
        this.dispatchEvent(toastEvent);
    })
}

}