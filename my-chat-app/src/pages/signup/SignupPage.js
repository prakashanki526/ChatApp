import React from 'react';
import styles from './SignupPage.module.css';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.form}>
                    <h2>Sign up</h2>

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
                    <div className={styles.inputBox}>
                        <input type = "password" required="required"></input>
                        <span>Confirm Password</span>
                        <i></i>
                    </div>
                    <div className={styles.wrapper}>
                        <input type="submit" value="Register"></input>
                        <div className={styles.links}>
                            Already have an account ? <Link to={"/login"}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;