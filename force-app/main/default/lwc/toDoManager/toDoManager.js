import { LightningElement } from 'lwc';
import addTodo from "@salesforce/apex/ToDoController.addTodo";
export default class ToDoManager extends LightningElement {

    time = "10:12 PM";
    greeting ="Good Morning";

    todos = [];

    connectedCallback(){
        this.setTime();
        this.populateTodos();
        setInterval(() => {
            this.setTime();
            console.log("Set Interval time");
        }, 1000);
    }

    setTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();

        this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)}:${this.getMidDay(hour)}`;
        this.setGreeting(hour);
    }

    getHour(hour){
        return hour === 0 ? 12 : hour > 12 ? (hour-12) : hour;
    }

    getMidDay(hour){
        return hour >= 12 ? "PM" : "AM";
    }

    getDoubleDigit(digit){
        return digit < 10 ? "0" + digit : digit;
    }

    setGreeting(hour){
        if(hour < 12){
            this.greeting = "Good Morning";
        }else if(hour >= 12 && hour < 17){
            this.greeting = "Good After Noon";
        }else {
            this.greeting = "Good Evening";
        }
    }
    addToDoHandler(){
        const inputBox = this.template.querySelector("lightning-input");
        console.log("Current Value--->", inputBox.value);

        const todo = {
             todoName: inputBox.value,
            done: false
        };

        addTodo({payload : JSON.stringify(todo)}).then(response => {
            console.log('Item inserted successfully');
        } ).catch(error => {
            console.error('Error in insert todo item', error);
        });
        //this.todos.push(todo);
        inputBox.value = "";
    }

    get upcomingTask(){
        return this.todos && this.todos.length ? this.todos.filter(todo => !todo.done) : [];
    }

    get completedTask(){
        return this.todos && this.todos.length ? this.todos.filter(todo => todo.done) : [];
    }

    populateTodos(){
        const todos = [
            {
                todoId : 0,
                todoName: "This is my 1",
                done: false,
                todoDate: new Date()
            },
            {
                todoId : 1,
                todoName: "This is my 2",
                done: false,
                todoDate: new Date()
            },
            {
                todoId : 2,
                todoName: "This is my 3",
                done: true,
                todoDate: new Date()
            }
        ];
        this.todos = todos;
    }
}