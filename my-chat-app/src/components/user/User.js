import React from 'react';
import styles from './User.module.css';
import { useNavigate } from 'react-router-dom';

const User = (props) => {
    const navigate = useNavigate();

    async function handleOpenChat(){
        navigate(`/chat/${props.userData.name}`, {state: props.userData});
    }

    return (
        <div className={styles.container} onClick={handleOpenChat}>
            <div className={styles.imgContainer}></div>
            <div className={styles.nameContainer}>
                {props.userData.name}
            </div>
        </div>
    );
};

export default User;