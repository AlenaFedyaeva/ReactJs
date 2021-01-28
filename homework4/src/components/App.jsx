import React from 'react';
// import MessageField from './MessageField.jsx';
// import SendMessage from './SendMessage.jsx';
import Messages from './pages/Messages';
import Router from './Router.jsx';
import '../styles/App.css'

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

// import { MuiThemeProvider } from '@material-ui/core/styles';

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
            // <MuiThemeProvider theme={theme}>

            <BrowserRouter> <main >
                <div className='cont'>
                    <div className='leftcol'>
                        <nav>
                            <div><Link to='/' key='home'>Home page </Link> </div>
                            <div><Link to='/num2' key='kc1'> Chat num2 </Link></div>
                            <div><Link to='/chat/1' key='kc1'> Chat 1 </Link></div>
                            <div><Link to='/chat/2' key='kc2'> Chat 2 </Link></div>
                            <div><Link to='/chat/3' key='kc3'> Chat 3 </Link></div>
                            <div><Link to='/chat/4' key='kc4'> Chat 4 </Link></div>
                            <div><Link to='/chat/5' key='kc5'> Chat 5 </Link></div>
                        </nav>

                    </div>
                    <div className='rightcol'>
                        <Router />
                        {/* <Switch>
                            <Route exact path="/" component={Messages} />
                            <Route path="/chat/:chatId" render={obj => <Messages chatId={obj.match.params.chatId} />} />
                            <Route path="/num2">
                                <Messages chatId={2} />
                            </Route>
                        </Switch>
                        <h2>under route from app</h2> */}
                    </div>
                </div>
                {/* <Layout /> */}
            </main > </BrowserRouter>
            // {/* </MuiThemeProvider> */ }
        );
    }
}


//Пробовала изменить версию как в 4 лекции   "@material-ui/core": "^4.9.3" в package.json тоже не работает с классовыми компонетами у меня 
// Eдинственное что заработало с  material-ui в следующем ниже примере, в виде функциональной компоненты

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

// Визуально появились кнопка и поле ввода, но сигнал нажатия не срабатывал

