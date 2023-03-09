import React from 'react';
import styles from './Sidebar.module.css';
import Navbar from '../navbar/Navbar';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Navbar />
        </div>
    );
};

export default Sidebar;