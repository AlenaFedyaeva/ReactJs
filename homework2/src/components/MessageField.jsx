import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message.jsx';

import styles from '../styles/Message';

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
            <> <Message message={message} author={author} key={`k_${id}`} />
                <br />
            </>
        );
        return (
            <div>{listItems}</div>
        );
    }
}