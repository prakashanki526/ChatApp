import React, {useState} from 'react';
import styles from './verifyOTP.module.css';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { verifyOTP, registerUser } from '../../components/api/discover';
import { userLogin } from '../../components/api/discover';
import LoadingSpinner from '../../components/Spinner/Spinner';

const VerifyOTP = (props) => {
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
    const [userOTP, setUserOTP] = useState("");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    async function handleVerify(e){
        e.preventDefault();
    
        setIsLoading(true);
        const data = await verifyOTP(userOTP);
        setIsLoading(false);
        if(data.error){
            toast.error(data.error);
            return;
        }

        if(props.email){
            props.setIsEnabledOTP(false);
            props.setIsSetPasswordModal(true);
            return;
        }
        
        setIsLoading(true);
        await registerUser(props.userData);
        const loginData = await userLogin(props.userData.email,props.userData.password);
        localStorage.token = loginData.token;
        setIsLoading(false);
        localStorage.email = props.userData.email;
        navigate("/");
        toast.success(data.msg);
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
                {isLoading ? <LoadingSpinner /> :
                <form className={styles.form} autoComplete="off" onSubmit={handleVerify}>
                    <h2>Verify OTP</h2>
                    <div className={styles.inputBox}>
                        <input type = "text" value={userOTP} onChange={(e)=> setUserOTP(e.target.value)} required="required"></input>
                        <span>Enter OTP</span>
                        <i></i>
                    </div>

                    <div className={styles.wrapper}>
                        <input type="submit" className={styles.submitBtn} value="Verify"></input>
                        <div className={styles.links}>
                            <Link to={"/login"}>Back to Login</Link>
                            <span onClick={()=>props.setIsEnabledOTP(false)}>Go Back</span>
                        </div>
                    </div>
                </form>}
            </Modal>
        </div>
    );
};

export default VerifyOTP;