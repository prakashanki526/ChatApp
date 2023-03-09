import toast from 'react-hot-toast';

export async function userValidate(values){
    let errors = usernameVerify({},values);
    if(errors.email){
        return errors;
    }

    return errors;
}

export async function registerValidation(values){
    let errors = verifyEmail({},values);
    if(errors.email){
        return errors;
    }
    errors = passwordVerify({},values);

    return errors;
}

function usernameVerify(error={},values){
    if(!values.email){
        error.email = toast.error("Email required.");
    } else if(values.email.includes(" ")){
        error.email = toast.error("Invalid email.");
    }

    return error;
}

 function passwordVerify(error={},values){
    if(!values.password){
        error.password = toast.error("Password required.");
    } else if(values.password !== values.confirm){
        error.password = toast.error("Password didn't match.");
    } else if(values.password.includes(" ")){
        error.password = toast.error("Invalid password.");
    } else if(values.password.length<6){
        error.password = toast.error("Password should contain atleast 6 characters.")
    }

    return error;
}

function verifyEmail(error={}, values){
    if(!values.email){
        error.email = toast.error("Email required.");
    } else if(values.email.includes(" ") || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("Invalid email.");
    }

    return error;
}
