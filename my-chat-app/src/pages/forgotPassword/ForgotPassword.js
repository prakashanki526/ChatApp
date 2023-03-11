import React, { useState } from 'react';
import styles from './ForgotPassword.module.css';
import { toast, Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { checkUserExist, otpMail } from '../../components/api/discover';
import LoadingSpinner from '../../components/Spinner/Spinner';
import VerifyOTP from '../verifyOtp/VerifyOTP';
import SetNewPassword from '../../components/setNewPassword/SetNewPassword';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isEnabledOTP, setIsEnabledOTP] = useState(false);
    const [isSetPasswordModal, setIsSetPasswordModal] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        if(!email || email.includes(" ") || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            toast.error("Invalid username");
            return;
        }

        setIsLoading(true);
        const user = await checkUserExist(email);
        setIsLoading(false);

        if(!user.error){
            toast.error("User do not exist.")
            return;
        }

        setIsLoading(true);
        await otpMail({email});
        setIsLoading(false);
        setIsEnabledOTP(true);
    }

    return (
        <div className={styles.container}>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            {isEnabledOTP && <VerifyOTP email={email} setIsEnabledOTP={setIsEnabledOTP} setIsSetPasswordModal={setIsSetPasswordModal} />}
            {isSetPasswordModal && <SetNewPassword email={email} />}
            {!isEnabledOTP && !isSetPasswordModal && <div className={styles.box}>
                {isLoading ? <LoadingSpinner /> :
                <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
                    <h2>Recover Password</h2>
                    <div className={styles.inputBox}>
                        <input type = "text" value={email} onChange={(e)=>setEmail(e.target.value)} required="required"></input>
                        <span>Enter your username</span>
                        <i></i>
                    </div>

                    <div className={styles.wrapper}>
                        <input type="submit" className={styles.submitBtn} value="Confirm"></input>
                        <div className={styles.links}>
                            <Link to={"/login"}>Back to Login</Link>
                            <Link to={"/signup"}>Register</Link>
                        </div>
                    </div>
                </form>}
            </div>}
        </div>
    );
};

export default ForgotPassword;