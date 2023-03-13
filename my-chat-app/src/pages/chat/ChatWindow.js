import React from 'react';
import styles from './Chat.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import UserChat from '../../components/chat/Chat';

const ChatWindow = (props) => {
    
    return (
        <div className={styles.home}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.chatArea}>
                <UserChat />
            </div>
        </div>
    );
};

export default ChatWindow;