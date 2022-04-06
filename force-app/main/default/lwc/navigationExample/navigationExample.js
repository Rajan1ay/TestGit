import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigationExample extends NavigationMixin(LightningElement) {

    openSFDCFacts(){
        alert('Hi');
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes: {
                url : 'https://sfdcfacts.com'
            }
        });
    }
    openAccount(){
        alert('Hi');
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }
    createNewContact(){
        alert('Hi');
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }
    openOppListView(){
        alert('Hi');
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        });
    }
    openCase(){
        alert('Hi');
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes: {
                recordId: '5002v00002itlm8AAA',
                objectApiName: 'Case',
                actionName: 'view'
               
            }
        });
    }
}