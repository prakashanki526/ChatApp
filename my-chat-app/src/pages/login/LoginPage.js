import React from 'react';
import styles from './LoginPage.module.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.form}>
                    <h2>Sign in</h2>
                    <div className={styles.inputBox}>
                        <input type = "text" required="required"></input>
                        <span>Username</span>
                        <i></i>
                    </div>

                    <div className={styles.inputBox}>
                        <input type = "password" required="required"></input>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className={styles.wrapper}>
                        <input type="submit" value="Login"></input>
                        <div className={styles.links}>
                            Not registered yet ? <Link to={"/signup"}>Signup</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;