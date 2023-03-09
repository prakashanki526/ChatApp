import axios from "axios";

export async function authenticate(email) {
    const reqUrl = `http://localhost:3001/discover/authenticate`;
    const result = await axios.post(reqUrl,email);
    return result.data;
}

export async function checkUserExist(email) {
    const reqUrl = `http://localhost:3001/discover/doesUserExist/${email}`;
    const result = await axios.get(reqUrl);
    return result.data;
}

export async function getUser(email) {
    const reqUrl = `https://chatbox-backend-qeni.onrender.com/discover/user/${email}`;
    const result = await axios.get(reqUrl);
    return result;
}

export async function registerUser(userData) {
    const reqUrl = `http://localhost:3001/discover/register`;
    const result = await axios.post(reqUrl,userData);
    return result.data;
}

export async function userLogin(email, password) {
    const reqUrl = `http://localhost:3001/discover/login`;
    const result = await axios.post(reqUrl,{email,password});
    return result.data;
}

export async function otpMail({email, name}) {
    const reqUrl = `http://localhost:3001/discover/registerMail`;
    const result = await axios.post(reqUrl,{email,name});
    return result.data;
}

export async function verifyOTP(code) {
    const reqUrl = `http://localhost:3001/discover/verifyOTP?code=${code}`;
    const result = await axios.get(reqUrl);
    return result.data;
}



// export async function updateUser(response) {
//     const token = await localStorage.getItem('token');
//     const reqUrl = `https://chatbox-backend-qeni.onrender.com/discover/updateUser`;
//     const result = await axios.put(reqUrl,response,{headers: {"Authorization": `Bearer ${token}`}});
//     return result;
// }