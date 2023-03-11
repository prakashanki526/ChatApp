import React from 'react';
import styles from './Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Chat from '../../components/chat/Chat';

const Home = () => {
    
    return (
        <div className={styles.home}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.chatArea}>
                {/* <Chat /> */}
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <h1>Select a user to start conversation</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;