import { LightningElement, track } from 'lwc';

export default class PublicParentComponent extends LightningElement {

    @track value;

    checkboxHandler(){
        const childComponent = this.template.querySelector('c-public-child-component');
        childComponent.selectCheckbox(this.value);
        
    }
}