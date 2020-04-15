import { BASE_URL } from './URLs';

export const RegisterURL = () => {
    const DEFAULT = 'register/';
    return {
        ROUTER : {
            BASE : BASE_URL + DEFAULT,
        },
        REDIRECT : {
            BASE : BASE_URL + DEFAULT,
        }
    };
};
export default RegisterURL;