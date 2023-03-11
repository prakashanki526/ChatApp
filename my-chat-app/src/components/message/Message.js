import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div className={styles.container}>
            <div className={props.sentMsg ? styles.sentMessage : styles.recievedMessage}>
                This is a message. This is a message. This is a message. This is a message. This is a message.
            </div>
        </div>
    );
};

export default Message;