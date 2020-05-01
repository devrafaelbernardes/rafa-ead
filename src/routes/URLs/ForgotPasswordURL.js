import { BASE_URL } from './URLs';

export const ForgotPasswordURL = () => {
    const DEFAULT = 'forgot/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;

    return {
        ROUTER : {
            BASE : formatURL(),
        },
        REDIRECT : {
            BASE : formatURL(),
        }
    };
};
export default ForgotPasswordURL;