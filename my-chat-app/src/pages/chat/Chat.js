import React, {useState} from 'react';
import styles from './Chat.module.css'
import Sidebar from '../../components/sidebar/Sidebar';
import UserChat from '../../components/chat/Chat';

const Chat = (props) => {
    const [partner, setPartner] = useState(localStorage.partner);
    
    return (
        <div className={styles.home}>
            <div className={styles.sidebar}>
                <Sidebar setPartner={setPartner} />
            </div>
            <div className={styles.chatArea}>
                <UserChat partner={partner} />
            </div>
        </div>
    );
};

export default Chat;