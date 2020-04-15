import { BASE_URL } from './URLs';

export const RegisterCourseURL = () => {
    const DEFAULT = 'access/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;

    const routes = (base) => {
        return ({
            BASE : formatURL(`${base}/`),
            LOGON : formatURL(`${base}/logon`),
            REGISTER : formatURL(`${base}/register`),
        });
    }

    return {
        ROUTER : routes(':token'),
        REDIRECT : (token) => routes(token),
    };
};
export default RegisterCourseURL;