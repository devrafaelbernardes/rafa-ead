import { BASE_URL } from './URLs';

export const TermsURL = () => {
    const DEFAULT = 'terms/';
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
export default TermsURL;