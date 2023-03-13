import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    const userEmail = localStorage.email;

    return (
        <div className={styles.container}>
            <div className={userEmail === props.messageData.sender ? styles.sentMessage : styles.recievedMessage}>
                {props.messageData.text}
            </div>
        </div>
    );
};

export default Message;