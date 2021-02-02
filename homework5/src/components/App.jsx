import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import Layout from './Layout.jsx'
import initStore from '../store';

import '../styles/App.css';
// import { MuiThemeProvider } from '@material-ui/core/styles';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // text: 'Some text from App!',
            // timeout: null,
            // messages: [],
        };
    }

    // componentDidMount() {
    //     console.log('componentDidMount');

    // };
    componentWillUnmount() {
        console.log('componentWillUnmount from app');
        debugger
        // clearTimeout(this.state.timeout);
        // this.setState({ timeout: null });
    }


    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        // if (prevState.messages.length < this.state.messages.length && this.state.messages[this.state.messages.length - 1].author === 'me') {
        //     const timeout = setTimeout(
        //         () => {
        //             this.setState({ messages: [...this.state.messages, { message: "Msg from didUpdate!", author: "robot" }] });
        //             this.setState({ timeout });
        //         },
        //         1000
        //     );
        // }
    }


    render() {
        return (
            // <MuiThemeProvider theme={theme}>
            <Provider store={initStore()}>
                <BrowserRouter> <main >
                    <Layout />

                </main > </BrowserRouter>
            </Provider>

            // {/* </MuiThemeProvider> */ }
        );
    }
}
