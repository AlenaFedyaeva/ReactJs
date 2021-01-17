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
            // interval: null,
            counter: 0,
            messages: [],
            // author: "robot"
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
        // clearInterval(this.state.interval);

        this.setState({ timeout: null });
        // this.setState({ interval: null });
    }


    componentDidUpdate() {
        // console.log('componentDidUpdate', this.state.messages.length, this.state.messages.length % 2);
        if (this.state.messages.length % 2 > 0) {
            // const timeout = setTimeout(
            //     () => {
            this.setState({ messages: [...this.state.messages, { message: "Msg from didUpdate!", author: "robot from did update" }] });
            //     },
            //     1000
            // );

            // this.setState({ timeout });
        }
    }

    handleClick = () => {
        this.setState({ 'counter': this.state.counter + 1 });
        // console.log("btn clicked", this.state.counter);
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
            <main>
                <h2>Homework 2 </h2>
                <MessageField messages={this.state.messages} />
                <SendMessage send={this.send} />
            </main>
        )
    }
}

export default App;