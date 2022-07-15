import { parseCookies, destroyCookie } from 'nookies';

function GetCookie(key) {
    return parseCookies()[key];
}

function GetAuthToken() {
    return localStorage.getItem('Authorization');
}

function SetAuthToken(token) {
    localStorage.setItem('Authorization', token)
}


function DeleteCookie(ctx, key, cb) {
    localStorage.removeItem(key);
    cb();
}

export {GetCookie, DeleteCookie, GetAuthToken, SetAuthToken};