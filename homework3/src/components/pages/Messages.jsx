import React from 'react';
import PropTypes from 'prop-types';
import MessageField from '../MessageField';
import SendMessage from '../SendMessage';

export default class Messages extends React.Component {
    state = {
        messages: []
    };

    static propTypes = {
        chatId: PropTypes.string,
    };

    static defaultProps = {
        chatId: -1
    }
    send = objMsg => {
        this.setState({ messages: [...this.state.messages, objMsg] });

    }

    render() {
        return <>
            <h2> Chat:  {this.props.chatId}</h2>
            <MessageField messages={this.state.messages} />
            <SendMessage send={this.send} />
        </>;

    }
}