import React, { useState } from 'react';
import styles from './User.module.css';
import { useNavigate } from 'react-router-dom';
import profilePic from '../../assets/profilePic.png'
import { openChat } from '../api/discover';
import LoadingSpinner from '../Spinner/Spinner';

const User = (props) => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    async function handleOpenChat(){
        setIsLoading(true);
        await openChat(localStorage.email, props.userData.email);
        setIsLoading(false);
        localStorage.setItem('partnerDetails', JSON.stringify(props.userData));
        props.setRoom(props.index);
        navigate(`/chat/${props.userData.name}`);
    }

    return (
        <div className={styles.container} onClick={handleOpenChat}>
            {isLoading && <LoadingSpinner />}
            <div className={styles.imgContainer}><img className={styles.img} src={profilePic} alt="pp"></img></div>
            <div className={styles.nameContainer}>
                {props.userData.name}
            </div>
        </div>
    );
};

export default User;