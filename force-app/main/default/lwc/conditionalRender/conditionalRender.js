import { LightningElement , track} from 'lwc';

export default class ConditionalRender extends LightningElement {

    @track displayDiv = false;
    @track cityList = ['Bangalore', 'Jaipur', 'chennai', 'Gaya', 'Patna'];

    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}