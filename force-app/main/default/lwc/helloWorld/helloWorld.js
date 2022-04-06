import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'World';
    changeHandler(event) {
        const url = document.baseURI;
        alert("ready for URL");
        alert(url);
                this.greeting = event.target.value;
    }
}