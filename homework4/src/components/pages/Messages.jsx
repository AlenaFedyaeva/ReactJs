import React from 'react';
import PropTypes from 'prop-types';
import MessageField from '../MessageField';
import SendMessage from '../SendMessage';

export default class Messages extends React.Component {
    state = {
        messages: [
            { message: 'message 0', author: 'robot', id: 0 },
            { message: 'message 1', author: 'robot', id: 1 },
            { message: 'message 2', author: 'robot', id: 2 },
            { message: 'message 3', author: 'robot', id: 3 },
            { message: 'message 4', author: 'robot', id: 4 },
            { message: 'message 5', author: 'robot', id: 5 },
            { message: 'message 6', author: 'robot', id: 6 },
            { message: 'message 7', author: 'robot', id: 7 },
            { message: 'message 8', author: 'robot', id: 8 },
            { message: 'message 9', author: 'robot', id: 9 },
        ],
        chats: {
            1: {
                name: 'Chat 1',
                messages: [0, 2, 3]
            },
            2: {
                name: 'Chat 2',
                messages: [1, 4]
            },
            3: {
                name: 'Chat 3',
                messages: [5, 6]
            },
            4: {
                name: 'Chat 4',
                messages: [7, 8]
            },
            5: {
                name: 'Chat 5',
                messages: [9, 0]
            }
        }
    };

    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
        messages: []
    }
    send = objMsg => {
        const newMsgId = this.state.messages.length;
        this.setState({
            messages:
                [...this.state.messages,
                { ...objMsg, id: newMsgId }]
        });
        const chats = { ...this.state.chats };
        chats[this.props.chatId].messages.push(newMsgId);
        // debugger
        this.setState({ chats: { ...chats } });

    }

    render() {
        console.log("new chat ", this.props.chatId, typeof (this.props.chatId));
        return <>
            <h2> Chat name:  {this.state.chats[this.props.chatId].name}</h2>
            <MessageField messages={this.state.messages.filter(
                ({ id }) => this.state.chats[this.props.chatId].messages.includes(id))} />
            <SendMessage send={this.send} />
        </>;

    }
}