import { LightningElement, track } from 'lwc';

export default class BmiCalulator extends LightningElement {
// Private property no track
    // cardTitle = 'BMI Calculator';

    // ChangePrivateProperytHandler(){
    //     this.cardTitle = 'Changed value';
    //     alert(this.cardTitle);
    //     Console.log('value:',this.cardTitle);
    //}
// below example is private with trackable 
    @track bmiResult;

    weight;
    height;

    handleHeight(event){
        this.height=parseFloat(event.target.value);
       }
       handleWeight(event){
        this.weight=parseFloat(event.target.value);
    }
    bmiCalulatorMethod(){
        try{
        this.bmiResult = this.weight/(this.height*this.height);
        }catch(error){
            this.bmiResult = undefined;
        }
    }
    get bmiValue(){
        
        if(this.bmiResult === undefined){
            return "";
        }
        return `Your BMI is : ${this.bmiResult}`;        
    }
    }