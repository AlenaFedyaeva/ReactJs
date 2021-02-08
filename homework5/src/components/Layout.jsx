import React from 'react';
import PropTypes from 'prop-types';
import Router from './Router.jsx';
import '../styles/Layout.css'

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chatName: '',
            chats: ['Chat 1',
                'Chat 2',
                'Chat 3',
                'Chat 4',
                'Chat 5']
        };
    }
    getChats = (obj) => {
        console.log("get chats", obj);
    }

    addChat = (event) => {
        console.log("add chat layout");
        this.setState({ chats: [...this.state.chats, this.state.chatName] });
    }
    textChanged = (event) => {
        console.log("textchanged ", event.target.value);
        this.setState({ chatName: event.target.value });
    }
    render() {
        return (
            <div className='cont'>
                <div className='leftcol'>
                    <h2>left col</h2>
                    <nav>
                        {this.state.chats.map((item, index) => {
                            return (
                                <div key={`kdiv_${index + 1}`}>
                                    <Link to={`/chat/${index + 1}`}
                                        key={`klink_${index + 1}`}> {item}</Link>
                                </div>
                            );
                        })}
                    </nav>

                    <div style={{ backgroundColor: "white" }}>
                        <label> chat name</label>
                        <textarea
                            onChange={this.textChanged} />

                        <button
                            onClick={this.addChat}>
                            add chat
                                </button>
                    </div>

                </div>
                <div className='rightcol'>
                    <h2>rightcol</h2>
                    <Router
                        getChats={this.getChats}
                        chatName={this.state.chatName}
                    />
                </div>
            </div>

        )
    }
    renderNo() {
        return (
            <div className='cont'>
                <div className='leftcol'>
                    <nav>
                        {this.state.chats.map((item, index) => {
                            return (
                                <div key={`kdiv_${index + 1}`}>
                                    <Link to={`/chat/${index + 1}`}
                                        key={`klink_${index + 1}`}> {item}</Link>
                                </div>
                            );
                        })}
                    </nav>

                    <div style={{ backgroundColor: "white" }}>
                        <label> chat name</label>
                        <textarea
                            onChange={this.textChanged} />

                        <button
                            onClick={this.addChat}>
                            add chat
                                </button>
                    </div>
                </div>
                <div className='rightcol'>
                    <Router
                        getChats={this.getChats}
                        chatName={this.state.chatName}
                    />
                </div>
            </div>
        );
    }
}

export default () => {
    return (
        <Layout />
    )
}