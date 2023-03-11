import React, {useEffect, useState} from 'react';
import styles from './Chat.module.css';
import Message from '../message/Message';

const Chat = (props) => {
    const [message, setMessage] = useState("");

    async function handleSendMessage(e){
        e.preventDefault();
        if(!message){
            return;
        }
        setMessage("");
    }

    return (
        <div className={styles.chat}>
            <div className={styles.nav}>
                <div className={styles.imgContainer}></div>
                <div className={styles.nameContainer}>User name</div>
            </div>
            <div className={styles.body}>
                <Message sentMsg={true} />
                <Message sentMsg={false} />
                <Message sentMsg={true} />
                <Message sentMsg={false} />
                <Message sentMsg={false} />
                <Message sentMsg={true} />
                <Message sentMsg={true} />
                <Message sentMsg={false} />
                <Message sentMsg={true} />
                <Message sentMsg={true} />
            </div>
            <form className={styles.inputFieldContainer} onSubmit={handleSendMessage}>
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message..." className={styles.inputField} />
                <input type="submit" className={styles.sendBtn} value="Send" required="required" />
            </form>
        </div>
    );
};

export default Chat;