import React from "react";
import UserDataContext from "./userDataContext";

const UserDataState = (props) => {
    let userData = {}

    return (
        <UserDataContext.Provider value={userData}>
            {props.children}
        </UserDataContext.Provider>
    );
};

export default UserDataState;