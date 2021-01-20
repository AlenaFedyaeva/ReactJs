import React, { Component } from 'react';
import Message from './Message.jsx';

export default class Example extends Component {
    state = {
        count: 0,
        text: ''
    }
    onBtnClick = (event) => {
        console.log("click from example");
        this.setState({ count: this.state.count + 1 });
    }
    change = (event) => {

        this.setState({ text: event.target.value });
        console.log("chahge", this.state.text);

    }
    render() {
        // Так передаем вниз параметры
        //<Message text={'Count click - ${this.state.count}'}/> 
        return <div>
            <h2> Example count = {this.state.count} </h2>
            <button onClick={this.onBtnClick}>+1</button>
            <br />
            <Message text={this.state.text} />
            <input value={this.state.text} onChange={this.change} />
        </div>;

    }
}