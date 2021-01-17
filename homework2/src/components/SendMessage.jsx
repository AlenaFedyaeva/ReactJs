import React from 'react';
import PropTypes from 'prop-types';


export default class SendMessage extends React.Component {
    state = {
        message: 'enter your text ...'
    }

    static propTypes = {
        send: PropTypes.func.isRequired
    };

    send = () => {
        this.props.send({ message: this.state.message, author: "me" });
        this.setState({ message: 'enter your text ...' });
    }

    onTextChange = (event) => {
        const text = event.target.value;
        this.setState({ message: text });
    }

    render() {
        return <div>
            <textarea value={this.state.message}
                onChange={this.onTextChange}> </textarea>
            <button onClick={this.send}> Send </button>
        </div>
    }
}