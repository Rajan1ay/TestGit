import { LightningElement, track, api } from 'lwc';

export default class PublicChildComponent extends LightningElement {

    @track value = ['red'];

    options = [
        { label: 'Red Marker ', value: 'red' },
        { label: 'Blue Marker ', value: 'blue' },
        { label: 'Pink Marker ', value: 'pink' },
        { label: 'Green Marker ', value: 'green' },
    ];

    @api
    selectCheckbox(checkboxValue){
       const selectedCheckbox =  this.options.find( checkbox =>{
            return checkboxValue === checkboxValue.value;
        })

        if(selectedCheckbox){
            this.value = selectedCheckbox.value;
            return "Successfully Checked";
        }
            return "No Check found";
        }
 
}