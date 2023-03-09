import React from "react";
import styles from "./spinner.css";
import Modal from "react-modal";

export default function LoadingSpinner() {
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
  return (
    <Modal
        isOpen={true}
        style={customStyles}
        onRequestClose={handleClose}
        className={styles.spinnerContainer}
    >
      {/* <div className="spinner-container"> */}
        <div className="loading-spinner"></div>
      {/* </div> */}
    </Modal>
  );
}