import React from 'react';
import MessageField from './MessageField.jsx';
import SendMessage from './SendMessage.jsx';
import Messages from './pages/Messages'
import '../styles/App.css'

import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";


const style = {
    fontSize: '20px',
    outline: 'red solid',
};// in 


export default class LayoutMy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Some text from App!',
            timeout: null,
            messages: [],
            theme: {
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            }
        };
    }

    componentDidMount() {
        console.log('componentDidMount');

    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearTimeout(this.state.timeout);
        // почему MuiThemeProvider не работает если расскомментировать
        //следующую строку? 
        this.setState({ timeout: null });
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', this.state.messages.length, this.state.messages.length % 2);
        if (prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length - 1].author === 'me') {
            const timeout = setTimeout(
                () => {
                    this.setState({ messages: [...this.state.messages, { message: "Msg from didUpdate!", author: "robot" }] });
                    this.setState({ timeout });
                },
                1000
            );
        }
    }
    //Блок с timeout закомментирован, тк по условию ДЗ был использован componentDidUpdate
    send = objMsg => {
        this.setState({ messages: [...this.state.messages, objMsg] });

        // const timeout = setTimeout(
        //     () => {
        //         this.setState({
        //             messages:
        //                 [...this.state.messages, { message: "Msg from Timeout.I am robot!", author: "robot" }]
        //         });
        //     },
        //     1000
        // );
        // this.setState({ timeout });
    }

    render() {
        console.log("render layout");

        return (
            <main className={'layout'} style={style}>
                <div className={'header'}>
                    Header
                </div>
                <div className={'content'}>
                    <div className={'left'}>
                        left
                        <nav>
                            <ul>
                                <li><Link to='/chat/1' key='kc1'> Chat 1 </Link></li>
                                <li><Link to='/chat/2' key='kc2'> Chat 2 </Link></li>
                                <li><Link to='/chat/3' key='kc3'> Chat 3 </Link></li>
                            </ul>

                        </nav>
                    </div>
                    <div className={'right'}>
                        right
                        <Switch>
                            <Route exact path="/" component={Messages} />
                            <Route path="/chat/:chatId" render={obj => <Messages chatId={obj.match.params.chatId} />} />
                            {/* <Route path='/chat/2'> <Messages chatId={2} />  </Route > */}

                        </Switch>

                    </div>
                </div>


            </main>
        );
    }
}
