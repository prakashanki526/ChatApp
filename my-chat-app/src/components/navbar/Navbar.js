import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>Chatbox</span>
            <div className={styles.user}>
                <img src="" alt="" className={styles.img}></img>
                <span>Ankit</span>
                <button className={styles.btn} onClick={()=>navigate("/login")}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;