import { BASE_URL } from './URLs';

export const LogonURL = () => {
    const DEFAULT = 'logon/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};
export default LogonURL;