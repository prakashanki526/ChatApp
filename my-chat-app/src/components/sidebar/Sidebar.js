import React, { useEffect, useState} from 'react';
import styles from './Sidebar.module.css';
import Navbar from '../navbar/Navbar';
import FindUser from '../findUser/FindUser';
import User from '../user/User';
import { getUsersList } from '../api/discover';

const Sidebar = (props) => {
    const [userList, setUserList] = useState([]);
    
    async function getUsers(email){
        props.setIsLoading(true);
        const list = await getUsersList(email);
        props.setIsLoading(false);
        setUserList(list);
    }

    useEffect(()=>{
        getUsers(localStorage.email);
    },[])

    return (
        <div className={styles.sidebar}>
            <Navbar />
            <div className={styles.findUser}>
                <FindUser />
            </div>
            <h5>REGISTERED USERS</h5>
            <div className={styles.connectedUsers}>
                {userList.map((user,index) => {
                    return <User key={index} userData={user} index={index} setRoom={props.setRoom} />
                })}
            </div>
        </div>
    );
};

export default Sidebar;