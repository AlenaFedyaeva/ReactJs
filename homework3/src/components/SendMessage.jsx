import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
// import { TextField } from 'material-ui'

export default class SendMessage extends React.Component {
    state = {
        message: 'enter your text ...'
    }

    static propTypes = {
        send: PropTypes.func.isRequired
    };

    send = () => {
        console.log('Send btn');
        this.props.send({ message: this.state.message, author: "me" });
        this.setState({ message: 'enter your text ...' });
    }

    onTextChange = (event) => {
        const text = event.target.value;
        this.setState({ message: text });
    }
    onKey = (event) => {
        console.log("key", event.keyCode);
        if (event.keyCode === 13) { // Enter
            this.send();
        }
    };
    render() {
        return <div>
            <textarea value={this.state.message}
                onChange={this.onTextChange}
                onKeyUp={this.onKey}>
            </textarea>
            {/* <TextField
                value={this.state.message}
                onChange={this.onTextChange}
                multiline={true}
                name='message' /> */}
            <button onClick={this.send}> Send </button>
        </div>
    }
}