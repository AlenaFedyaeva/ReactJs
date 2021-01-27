import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => (
    {
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch'
            },
        },
        '& > *': {
            margin: theme.spacing(1),
        }
    }
));

export default class SendMessage extends React.Component {
    state = {
        message: 'enter your text ...'
    }

    static propTypes = {
        send: PropTypes.func.isRequired
    };

    send = (event) => {
        event.preventDefault();
        console.log('Send btn');
        this.props.send({ message: this.state.message, author: "me" });
        this.setState({ message: 'enter your text ...' });
    }

    onTextChange = (event) => {
        const text = event.target.value;
        this.setState({ message: text });
    }
    onKey = (event) => {
        console.log("key", event.keyCode);
        if (event.keyCode === 13) { // Enter
            this.send();
        }
    };
    render() {
        // const classes = useStyles();

        return <div>
            <textarea value={this.state.message}
                onChange={this.onTextChange}
                onKeyUp={this.onKey}>
            </textarea>

            <button onClick={this.send} type="submit"> Send </button>
        </div>
    }
}