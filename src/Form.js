import {Component} from 'react';
import React from 'react';
import { v4 as uuid } from 'uuid';


export default class Form extends Component {
    setCards = this.props.setCards;

    handleSubmit(event){
        event.preventDefault();
        const newItem = {
            id: uuid(),
            titre: this.state.title,
            message: this.state.message
        };
        this.setCards(prev=>[...prev, newItem]);
    };

    constructor(props){
        super(props);

        this.state = {
            title: "",
            message: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getTitle = (e) => {
        this.setState({title: e.target.value});
    }
    getMessage = (e) => {
        this.setState({message: e.target.value});
    }
   
    
    render() {
        return (
            <div class="header">
            <form className="createTodo" onSubmit={this.handleSubmit}>
                <input type="text" className="taskName" placeholder="Task" onChange={this.getTitle}></input>
                <textarea rows="3" className="taskDescription" placeholder="Describe here your next challenge..." onChange={this.getMessage}></textarea>
                <button type={"submit"} className="">add</button>
                </form>
            </div>
        )
    }
}