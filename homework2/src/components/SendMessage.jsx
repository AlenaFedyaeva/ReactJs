import React from 'react';
import PropTypes from 'prop-types';


export default class SendMessage extends React.Component {
    state = {
        message: ''
    }

    static propTypes = {
        send: PropTypes.func.isRequired
    };
    send = () => {
        console.log("msg=", this.state.message);
        this.props.send({ message: this.state.message, author: "me" });
        this.setState({ message: '' });
    }

    static defaultProps = {
        messages: []
    };


    onTextChange = (event) => {
        const text = event.target.value;
        console.log("text changed", text)
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