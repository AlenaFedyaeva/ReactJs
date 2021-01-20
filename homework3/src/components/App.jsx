import React from 'react';
import MessageField from './MessageField.jsx';
import SendMessage from './SendMessage.jsx';
import '../styles/App.css'

import { MuiThemeProvider } from '@material-ui/core/styles';

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


    componentDidUpdate() {
        // console.log('componentDidUpdate', this.state.messages.length, this.state.messages.length % 2);
        // if (this.state.messages.length % 2 > 0) {
        //     const timeout = setTimeout(
        //         () => {
        // this.setState({ messages: [...this.state.messages, { message: "Msg from didUpdate!", author: "robot from did update" }] });
        //         },
        //         1000
        //     );
        // }
    }
    //Блок с timeout закомментирован, тк по условию ДЗ был использован componentDidUpdate
    send = objMsg => {
        this.setState({ messages: [...this.state.messages, objMsg] });

        const timeout = setTimeout(
            () => {
                this.setState({
                    messages:
                        [...this.state.messages, { message: "Msg from Timeout.I am robot!", author: "robot" }]
                });
            },
            1000
        );
        this.setState({ timeout });
    }

    render() {
        return (
            // <MuiThemeProvider theme={this.state.theme}>
            <main className={'main'}>
                <h2>Homework 3 </h2>
                <MessageField messages={this.state.messages} />
                <SendMessage send={this.send} />
            </main>
            // </MuiThemeProvider>
        );

    }
}

//////////////////////////////////////////////////////////////////
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// const theme = {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
// };//createMuiTheme();

// export default function App() {
//     return (
//         <MuiThemeProvider theme={theme}>
//             <h2>nnn</h2>
//             {/* <MessageField messages={[]} /> */}
//             {/* <SendMessage send={() => { }} /> */}
//             <AppIn />
//         </MuiThemeProvider>
//     );
// }
