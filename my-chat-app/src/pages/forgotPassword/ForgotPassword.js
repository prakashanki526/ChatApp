import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { checkUserExist } from '../../components/api/discover';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    async function handleSubmit(e){
        e.preventDefault();
        if(!email || email.includes(" ") || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            toast.error("Invalid username");
            return;
        }

        const user = await checkUserExist(email);
        if(!user.error){
            toast.error("User do not exist.")
            return;
        }

        // set new password 
    }
    return (
        <div className={styles.container}>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className={styles.box}>
                <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Recover Password</h2>
                    <div className={styles.inputBox}>
                        <input type = "text" value={email} onChange={(e)=>setEmail(e.target.value)} required="required"></input>
                        <span>Enter your username</span>
                        <i></i>
                    </div>

                    <div className={styles.wrapper}>
                        <input type="submit" value="Confirm"></input>
                        <div className={styles.links}>
                            <Link to={"/login"}>Back to Login</Link>
                            <Link to={"/signup"}>Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;