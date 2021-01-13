import React from 'react';
import Example from './Example.jsx';
import Message from './Message.jsx';
import MessageField from './MessageField.jsx';
import MessageList from './MessageList.jsx';
import SendMessage from './SendMessage.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Some text from App!',
            timeout: null,
            counter: 0,
            messages: ['Hello!', 'Hello 2', 'How are you']
        };
    }
    componentWillMount() {
        console.log('componentWillMount');

    }

    componentDidMount() {
        console.log('componentDidMount');
        const timeout = setTimeout(
            () => {
                this.setState({ text: "text from DIDMount" });
            },
            2000
        );

        this.setState({ timeout });
    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearTimeout(this.state.timeout);
        this.setState({ timeout: null });
    }


    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    handleClick = () => {
        this.setState({ 'counter': this.state.counter + 1 });
        console.log("btn clicked", this.state.counter);
    }
    send = msg => {
        console.log("send=", msg);
        this.setState({ messages: [...this.state.messages, msg] });
    }
    render() {
        console.log('render');
        return (
            <main>
                {/* <h1>MessageList from classwork</h1> */}
                {/* <MessageList messages={this.state.messages} /> */}
                <h2>Homework MessageField</h2>
                <MessageField messages={this.state.messages} />
                <SendMessage send={this.send} />
                {/* <Message text={this.state.text} /> */}
                {/* <Example /> */}
            </main>

        )
    }
}

export default App;