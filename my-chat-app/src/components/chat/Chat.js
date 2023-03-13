import React, { useEffect, useState} from 'react';
import styles from './Chat.module.css';
import Message from '../message/Message';
import { useNavigate } from 'react-router-dom';
import profilePic from '../../assets/profilePic.png'
// import { io } from 'socket.io-client';
import { getAllMessages, sendMessage } from '../api/discover';
import LoadingSpinner from '../Spinner/Spinner';
import backIcon from '../../assets/backIcon.svg';
import sendIcon from '../../assets/sendIcon.svg';


const Chat = (props) => {
    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [partnerData, setPartnerData] = useState({});
    const retrievedPartner = localStorage.getItem('partnerDetails');
    const partner = JSON.parse(retrievedPartner);

    useEffect(()=>{
        setPartnerData(partner);

        fetchMessages(localStorage.email, partner.email);
    },[partner.email])

    async function fetchMessages(sender, reciever){
        setIsLoading(true);
        const messages = await getAllMessages(sender, reciever);
        setIsLoading(false);
        setMessageList(messages);
    }

    async function handleSendMessage(e){
        e.preventDefault();
        if(!message){
            return;
        }

        const dataToSend = {
            text: message,
            sender: localStorage.email,
            reciever: partnerData.email,
            time: new Date().getMilliseconds
        }

        await sendMessage(dataToSend);
        await fetchMessages(localStorage.email, partnerData.email);
        
        setMessage("");
    }

    return (
        <div className={styles.chat}>
            <div className={styles.nav}>
                <div className={styles.back} onClick={()=> navigate('/')}>
                    <img src={backIcon} alt="go back" height="30px"></img>
                </div>
                <div className={styles.userDetail}>
                    <div className={styles.imgContainer}><img src={profilePic} alt="pp" className={styles.img}></img></div>
                    <div className={styles.nameContainer}>{partnerData ? partnerData.name : "User name"}</div>
                </div>
            </div>
            <div className={styles.body}>
                {isLoading && <LoadingSpinner />}
                {messageList.map((m, index) => {
                    return <Message key={index} messageData={m} />
                })}
            </div>
            <form className={styles.inputFieldContainer} onSubmit={handleSendMessage}>
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message..." className={styles.inputField} />
                {/* <input type="submit" className={styles.sendBtn} value="Send" required="required" /> */}
                <div className={styles.sendBtn}>
                    <input type="image" alt='send' src={sendIcon} />
                </div>
            </form>
        </div>
    );
};

export default Chat;