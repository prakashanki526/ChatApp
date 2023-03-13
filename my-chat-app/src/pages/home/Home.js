import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Chat from '../../components/chat/Chat';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Spinner/Spinner';

const Home = () => {
    const {partnerName} = useParams();
    const [currentPage, setCurrentPage] = useState("homePage");
    const [isLoading, setIsLoading] = useState(false);
    const [room, setRoom] = useState(null);

    useEffect(()=>{
        partnerName ? setCurrentPage("chatWindow") : setCurrentPage("homePage");
    },[partnerName])

    return (
        <div className={styles.home}>
            {isLoading && <LoadingSpinner />}
            <div className={currentPage === "homePage" ? styles.sidebar : styles.chatPageSidebar}>
                <Sidebar setIsLoading={setIsLoading} setRoom={setRoom} />
            </div>
            <div className={currentPage === "homePage" ? styles.chatArea : styles.chatPageChatArea}>
                {currentPage === "chatWindow" ? <Chat room={room} /> :
                <div className={styles.container}>
                    <div className={styles.textContainer}>
                        <h1>Select a user to start conversation</h1>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default Home;