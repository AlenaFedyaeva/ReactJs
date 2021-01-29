import React from 'react';
import Messages from './pages/Messages';

import { Switch, Route } from 'react-router-dom';

export default class Router extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Messages} />
                <Route path="/chat/:chatId" render={obj =>
                    <Messages chatId={obj.match.params.chatId} />
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