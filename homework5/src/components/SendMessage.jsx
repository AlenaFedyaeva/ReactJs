import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import { TextField } from '@material-ui/core/TextField';

export default class SendMessage extends React.Component {
    state = {
        message: 'enter your text ...'
    }

    static propTypes = {
        send: PropTypes.func.isRequired
    };

    send = (event) => {
        event.preventDefault();
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
        return <div style={{
            width: '90%',
            display: 'flex',
            marginTop: '10px'
        }}>
            <textarea value={this.state.message}
                onChange={this.onTextChange}
                onKeyUp={this.onKey}
                style={{ width: '70%', marginLeft: '5%' }}>
            </textarea>

            <button onClick={this.send}
                type="submit"
                style={{
                    width: '20%', marginLeft: '5%'
                }}
            > Send </button>
        </div>
    }
}