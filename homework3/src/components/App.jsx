import React from 'react';
import MessageField from './MessageField.jsx';
import SendMessage from './SendMessage.jsx';
import Messages from './pages/Messages'
import '../styles/App.css'

import { BrowserRouter, Switch, Router, Route, Link } from "react-router-dom";

// import { MuiThemeProvider } from '@material-ui/core/styles';
import Layout from './Layout.jsx';

// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

export default class App extends React.Component {
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
        return (
            // <MuiThemeProvider theme={this.state.theme}>
            <main >
                <BrowserRouter>
                    {/* <h2>Homework 3 </h2> */}
                    {/* <MessageField messages={this.state.messages} />
                    <SendMessage send={this.send} /> */}
                    {/* <nav>
                        <Link to='/chat/1' key='kc1'> Chat 1 </Link>
                        <Link to='/chat/2' key='kc2'> Chat 2 </Link>
                        <Link to='/chat/3' key='kc3'> Chat 3 </Link>
                        <Link to='/chat/4' key='kc4'> Chat 4 </Link>
                        <Link to='/chat/5' key='kc5'> Chat 5 </Link>
                    </nav> */}
                    {/* <Switch> */}
                    {/* <Route exact path="/" component={Messages} /> */}
                    {/* <Route path="/chat/:chatId" render={obj => <Messages chatId={obj.match.params.chatId} />} /> */}
                    {/*// <Route path='/chat/2'> <Messages chatId={2} />  </Route > */}
                    {/* </Switch> */}
                    <Layout />
                </BrowserRouter>

            </main >
            // </MuiThemeProvider>
            //MuiThemeProvider - Перепробовала все. Как на сайте написано не работает,
            // из методички у меня material-ui вообще не устанавливается. (У меня Debian)
            //Единственное что заработало, это пример ниже. В Виде функциональной
            //компоненты, но если, например встроить в него этот класс, ничего не работает(

        );

    }
}

// Eдинственное что заработало из  material-ui
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// const theme = {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// };//createMuiTheme();

// export default function App() {
//     return (
//         <MuiThemeProvider theme={theme}>
//             <h2>nnn</h2>
//             {/* <SendMessage send={() => { }} /> */}
//         </MuiThemeProvider>
//     );
// }
