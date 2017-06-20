import {CHANGE_AUTH} from '../types';

export function authenticate(logedin) {
    return{
        type:CHANGE_AUTH,
        payload:logedin
    }
}