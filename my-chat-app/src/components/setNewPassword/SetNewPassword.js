import React, { useState } from 'react';
import styles from './SetNewPassword.module.css';
import LoadingSpinner from '../Spinner/Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Modal from 'react-modal';
import { recoverPassword } from '../api/discover';

const SetNewPassword = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
        overlay: {
            background: "rgb(30, 39, 46,0.8)"
        },
    };

    function handleClose(){
        // props.setIsEnabledOTP(false);
    }

    const navigate = useNavigate();

    function isValidPassword(password,confirm){
        if(!password){
            return false;
        } else if(password !== confirm){
            toast.error("Password didn't match.");
            return false;
        } else if(password.includes(" ")){
            toast.error("Invalid password.");
            return false;
        } else if(password.length<6){
            toast.error("Password should contain atleast 6 characters.")
            return false;
        }
        return true;
    }

    async function handleSubmit(e){
        e.preventDefault();
        const email = props.email;
        if(isValidPassword(password,confirm)){
            setIsLoading(true);
            await recoverPassword({email,password});
            setIsLoading(false);
            toast.success("Password reset");
            navigate("/login");
        }
    }

    return (
        <div className={styles.container}>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
        <Modal
                isOpen={true}
                style={customStyles}
                onRequestClose={handleClose}
                className={styles.box}
            >
                {isLoading && <LoadingSpinner />}
                {!isLoading && <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
                    <h2>Reset Password</h2>
                    <div className={styles.inputBox}>
                        <input type = "password" value={password} onChange={(e)=> setPassword(e.target.value)} required="required"></input>
                        <span>New Password</span>
                        <i></i>
                    </div>

                    <div className={styles.inputBox}>
                        <input type = "password" value={confirm} onChange={(e)=> setConfirm(e.target.value)} required="required"></input>
                        <span>Confirm Password</span>
                        <i></i>
                    </div>
                    <div className={styles.wrapper}>
                        <input type="submit" className={styles.submitBtn} value="Change Password"></input>
                        <div className={styles.links}>
                            <Link to={"/login"}>Login</Link>
                            <Link to={"/signup"}>Register</Link>
                        </div>
                    </div>
                </form>}
        </Modal>
        </div>
    );
};

export default SetNewPassword;