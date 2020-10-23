import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const initState = {
    authError: null
}

const AuthReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            toast.error('Login failed, password or username is incorrect');
            return {
                ...state,
                authError: 'Login Failed '               
            }
        case 'LOGIN_SUCCESS':
            toast.success('Login successful')
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            toast.success('Successfully signed out')
            return state;
        case 'SIGNUP_SUCCESS':
            toast.success('Signup was successful')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            toast.error(action.err.message);
            return {
                ...state,
                authError: action.err.message,
            }
        case 'PASSWORD_RESET_SUCCESS':
            toast.success('Password reset was sent successfully')
            return {
                ...state,
                authError: null
            }
        case 'PASSWORD_RESET_ERROR':
            toast.error(action.err.message);
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default AuthReducer