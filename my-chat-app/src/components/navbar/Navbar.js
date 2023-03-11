import React from 'react';
import styles from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';
import logoutIcon from '../../assets/logoutIcon.svg';

const Navbar = () => {
    const navigate = useNavigate();

    function handleLogout(){
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        navigate('/login');
    }

    return (
        <div className={styles.navbar}>
            <span className={styles.logo} onClick={()=>navigate('/')}>Chatbox</span>
            <div className={styles.user}>
                <img src={logoutIcon} alt="err" className={styles.btn} onClick={handleLogout}></img>
            </div>
        </div>
    );
};

export default Navbar;