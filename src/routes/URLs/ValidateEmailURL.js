import { BASE_URL } from './URLs';

export const ValidateEmailURL = () => {
    const DEFAULT = 'validate/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;

    return {
        ROUTER : {
            BASE : formatURL(':token/'),
        },
        REDIRECT : {
            BASE : (token) => formatURL(token),
        }
    };
};
export default ValidateEmailURL;