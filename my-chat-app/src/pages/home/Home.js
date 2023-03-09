import React from 'react';
import styles from './Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Chat from '../../components/chat/Chat';

const Home = () => {
    return (
        <div className={styles.home}>
            <Sidebar />
            <Chat />
        </div>
    );
};

export default Home;