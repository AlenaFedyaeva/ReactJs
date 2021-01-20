import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message.jsx';

import styles from '../styles/MessageField.css';

const style = { fontSize: '20px' };// in 

export default class MessageField extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

    render() {
        const msg = this.props.messages;
        const listItems = msg.map(({ message, author }, id) =>
            < >
                <Message message={message} author={author} key={`messageF_${id}`} />
                <br key={`keyF_${id}`} />
            </>

        );
        return (
            <div className={'messages'} style={style}>{listItems}</div>
        );
    }
}