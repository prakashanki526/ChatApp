import React, { useState } from 'react';
import styles from './SignupPage.module.css';
import { Link } from 'react-router-dom';
import {Toaster,toast} from 'react-hot-toast';
import {useFormik} from 'formik';
import { registerValidation } from '../../components/validation/validate';
import VerifyOTP from '../verifyOtp/VerifyOTP';
import { checkUserExist, otpMail } from '../../components/api/discover';

const SignupPage = () => {
    const [formData, setFormData] = useState({});

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirm: ''
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            enableOTP(values);
        }
    });

    async function enableOTP(userData){
        const data = await checkUserExist(userData.email);
        if(data.error){
            toast.error(data.error);
            return;
        }

        await otpMail(userData);
        
        setFormData(userData);
        setIsEnabledOTP(true);
    }

    const [isEnabledOTP, setIsEnabledOTP] = useState(false);

    return (
        <div className={styles.container}>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
                {isEnabledOTP && <VerifyOTP userData={formData} setIsEnabledOTP={setIsEnabledOTP} />}
                {!isEnabledOTP && <div className={styles.box}>
                <form className={styles.form} onSubmit={formik.handleSubmit} autoComplete="off">
                    <h2>Sign up</h2>

                    <div className={styles.inputBox}>
                        <input {...formik.getFieldProps('name')} type = "text" required="required"></input>
                        <span>Full name</span>
                        <i></i>
                    </div>

                    <div className={styles.inputBox}>
                        <input {...formik.getFieldProps('email')}  type = "text" required="required"></input>
                        <span>Email</span>
                        <i></i>
                    </div>

                    <div className={styles.inputBox}>
                        <input {...formik.getFieldProps('password')} type = "password" required="required"></input>
                        <span>Password</span>
                        <i></i>
                    </div>
                    <div className={styles.inputBox}>
                        <input {...formik.getFieldProps('confirm')} type = "password" required="required"></input>
                        <span>Confirm Password</span>
                        <i></i>
                    </div>
                    <div className={styles.wrapper}>
                        <input type="submit" value="Register"></input>
                        <div className={styles.links}>
                            Already have an account ? <Link to={"/login"}>Login</Link>
                        </div>
                    </div>
                </form>
            </div>}
        </div>
    );
};

export default SignupPage;