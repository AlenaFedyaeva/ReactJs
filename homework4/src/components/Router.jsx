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
            </Switch>
        );
    }
}