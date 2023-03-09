import React, {useState} from 'react';
import styles from './verifyOTP.module.css';
import { Toaster, toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { verifyOTP, registerUser } from '../../components/api/discover';

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

    async function handleVerify(e){
        e.preventDefault();
        // console.log(props.userData);
        const data = await verifyOTP(userOTP);
        if(data.error){
            toast.error(data.error);
            return;
        }

        await registerUser(props.userData);
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
                <form className={styles.form} autoComplete="off" onSubmit={handleVerify}>
                    <h2>Verify OTP</h2>
                    <div className={styles.inputBox}>
                        <input type = "text" value={userOTP} onChange={(e)=> setUserOTP(e.target.value)} required="required"></input>
                        <span>Enter OTP</span>
                        <i></i>
                    </div>

                    <div className={styles.wrapper}>
                        <input type="submit" value="Verify"></input>
                        <div className={styles.links}>
                            <Link to={"/login"}>Back to Login</Link>
                            <span onClick={()=>props.setIsEnabledOTP(false)}>Go Back</span>
                        </div>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default VerifyOTP;