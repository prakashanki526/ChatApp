import React, { useState } from 'react';
import styles from './LoginPage.module.css';
import { Link, useNavigate } from 'react-router-dom';
import {Toaster, toast} from 'react-hot-toast';
import { userLogin } from '../../components/api/discover';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        if(email.includes(" ") || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            toast.error("Invalid email.");
            return;
        }
        const data = await userLogin(email,password);
        if(data.error){
            toast.error(data.error);
            return;
        }
        navigate("/");
    }

    return (
        <div className={styles.container}>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className={styles.box}>
                <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
                    <h2>Sign in</h2>
                    <div className={styles.inputBox}>
                        <input type = "text" value={email} onChange={(e)=>setEmail(e.target.value)} required="required"></input>
                        <span>Username</span>
                        <i></i>
                    </div>

                    <div className={styles.inputBox}>
                        <input type = "password" value={password} onChange={(e)=>setPassword(e.target.value)} required="required"></input>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className={styles.wrapper}>
                        <input type="submit" value="Login"></input>
                        <div className={styles.links}>
                            <Link to={"/forgotPassword"}>Forgot Password ?</Link>
                            <Link to={"/signup"}>Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;