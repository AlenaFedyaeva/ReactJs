import React from 'react';
import PropTypes from 'prop-types';

import Message from './Message.jsx';

import styles from '../styles/Message';

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static defaultProps = {
        messages: []
    };

    render() {
        const msg = this.props.messages;
        const listItems = msg.map((value, id) =>
            <> <Message text={value} key={`k_${id}`} />
                <br key={`br_${id}`} />
            </>
        );
        return (
            <div>{listItems}</div>
        );
    }
}