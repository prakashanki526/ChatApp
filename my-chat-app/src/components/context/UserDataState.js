import React, {useState} from "react";
import UserDataContext from "./userDataContext";

const UserDataState = (props) => {
    const [userData, setUserData] = useState({});
    const state = {
        "userData": userData,
        "setUserData": setUserData
    }
    
    return (
        <UserDataContext.Provider value={state}>
            {props.children}
        </UserDataContext.Provider>
    );
};

export default UserDataState;