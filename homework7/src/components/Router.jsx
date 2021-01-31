import React from 'react';
import PropTypes from 'prop-types';
import Messages from './pages/Messages';

import { Switch, Route } from 'react-router-dom';

export default class Router extends React.Component {

    static propTypes = {
        getChats: PropTypes.func,
        chatName: PropTypes.string
    };

    static defaultProps = {
        chatName: ""
    }

    constructor(props) {
        super(props);
        console.log("add new chat from router", this.props.chatName);
    }


    render() {
        console.log("render router ",
            "add", this.props.chatName);

        const chatName = this.props.chatName;
        console.log("router render  ", chatName);
        return (
            <Switch>
                <Route exact path="/" component={Messages} />
                <Route path="/chat/:chatId" render={obj =>
                    <Messages
                        chatId={obj.match.params.chatId}
                        getChats={this.props.getChats}
                        ttt={chatName}
                    />
                } />
                <Route exact path="/profile/">
                    <h1> profile </h1>
                    <h3> name: User</h3>
                    <h3> tel: 8888888888</h3>
                </Route>
            </Switch>
        );
    }
}