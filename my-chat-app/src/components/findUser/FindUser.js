import React from 'react';
import styles from './FindUser.module.css';

const FindUser = () => {
    return (
        <div className={styles.container}>
            <input type="text" className={styles.inputField} placeholder="Find a user..." />
        </div>
    );
};

export default FindUser;