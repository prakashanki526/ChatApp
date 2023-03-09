import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.token = "";
        navigate('/login');
    }

    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>Chatbox</span>
            <div className={styles.user}>
                <img src="" alt="" className={styles.img}></img>
                <span>Ankit</span>
                <button className={styles.btn} onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Navbar;