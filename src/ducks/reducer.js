import axios from 'axios';

const initialState = {
    id: null,
    username: "",
    password: "", isLoggedIn: false
}

//ACTION
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_USER = 'GET_USER';

//ACTION CREATORS (FUNCTIONS)
export function loginUser({userId, username}) {
    return {
        type: LOGIN_USER,
        payload: {
            id: userId,
            username
        }
    }
}

export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function getuser() {
    const user = axios.get('/auth/user')
    return {
        type: GET_USER,
        payload: user
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, ...action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        case GET_USER + '_PENDING':
            return state
        case GET_USER + '_FULFILLED':
            return {...state, user: action.payload.data, isLoggedIn: true}
        case GET_USER + '_REJECTED':
            return initialState
        default:
            return initialState
    }
}
