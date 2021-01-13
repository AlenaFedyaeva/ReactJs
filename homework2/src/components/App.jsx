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
            messages: [],
            author: "robot"
        };
    }
    componentWillMount() {
        console.log('componentWillMount');

    }

    componentDidMount() {
        console.log('componentDidMount');

    };
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearTimeout(this.state.timeout);
        this.setState({ timeout: null });
    }


    componentWillUpdate() {
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 === 1) {
            const timeout = setTimeout(
                () => {
                    this.setState({ messages: [...this.state.messages, "I do nor answer.I am robot!"] });
                    // this.setState({ author: "robot" });
                },
                500
            );

            this.setState({ timeout });
        }

    }

    handleClick = () => {
        this.setState({ 'counter': this.state.counter + 1 });
        console.log("btn clicked", this.state.counter);
    }
    send = objMsg => {
        console.log("send=", objMsg, this.state.messages, this.state.author);
        this.setState({ messages: [...this.state.messages, objMsg.message] });
        this.setState({ author: objMsg.author });
        console.log("send=", objMsg, this.state.messages, this.state.author);

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