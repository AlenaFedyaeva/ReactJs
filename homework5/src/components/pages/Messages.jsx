import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import MessageField from '../MessageField';
import SendMessage from '../SendMessage';

import { sendMessage } from '../../store/actions/message.js'


class Messages extends React.Component {
    state = {
        timeout: null,
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


    constructor(props) {
        super(props);
        console.log('constructor', typeof (this.props.getChats));
        const newMsgId = this.state.messages.length;
        console.log("add new chat from message ", this.props.ttt);
    }

    static propTypes = {
        chatId: PropTypes.number,
        getChats: PropTypes.func.isRequired,
        ttt: PropTypes.string
    };

    static defaultProps = {
        chatId: 1,
        messages: [],
        ttt: ""
    }

    // componentDidMount() {
    // console.log('componentDidMount from messages', "add - ", this.props.ttt);
    // };
    // componentDidUpdate() {
    // console.log('componentDidUpdate from messages', "", this.props.getChats({ hello: "Hello from message" }));
    // };


    // componentWillUnmount() {
    // clearTimeout(this.state.timeout);
    // this.setState({ timeout: null });
    // }
    send = objMsg => {
        const newMsgId = this.state.messages.length;
        this.setState({
            messages:
                [...this.state.messages,
                { ...objMsg, id: newMsgId }]
        });
        this.props.sendMessage(...objMsg, this.props.chatId);
        const chats = { ...this.state.chats };
        chats[this.props.chatId].messages.push(newMsgId);
        // debugger
        this.setState({ chats: { ...chats } });

        //     const timeout = setTimeout(
        //         () => {
        //             const newId = this.state.messages.length;
        //             this.setState({
        //                 messages:
        //                     [...this.state.messages,
        //                     { message: 'I do not answer you. I am robot', author: 'robot', id: newId }]
        //             });
        //             const chats = { ...this.state.chats };
        //             chats[this.props.chatId].messages.push(newId);
        //             this.setState({ chats: { ...chats } });

        //         },
        //         1000
        //     );
        //     this.setState({ timeout });

    }

    // Если messages - словарь, то фильтрация другая: this.state.chats[this.props.chatId].messages.map(item => this.state.messages[item])
    render() {
        let msg = this.state.messages;
        if (this.props.messagesStore != undefined) {
            msg = this.props.messagesStore;
            console.log("messageStore ! ", this.props.messagesStore);
        }

        // debugger
        return (<div className={'sendmessages'} >
            <h2> Messages</h2>
            <h2> Chat name: {this.props.chatId}
                {/* {this.state.chats[this.props.chatId].name} */}
                <span>        </span>
                <Link to='/profile'>profile </Link>
            </h2>

            <MessageField messages={msg.filter(
                ({ id }) => this.state.chats[this.props.chatId].messages.includes(id))} />


            <SendMessage send={this.send} />

        </div >);

    }
}

export default Messages;
// const mapStateToProps = store => ({
//     messagesStore: store.messagesReducer
// });

// const mapDispatchToProps = {
//     sendMessage: sendMessage
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Messages);