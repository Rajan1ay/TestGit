import { LightningElement, track, api } from 'lwc';

export default class HelpTextExample extends LightningElement {
    
    @api name = 'lorem ipsum';
    changeHandler(event) {
        this.name = event.target.value;
}}