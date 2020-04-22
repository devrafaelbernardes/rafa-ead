import { BASE_URL } from './URLs';

export const CourseURL = (id = "") => {
    const DEFAULT = 'course/';
    const formatURL = (url = "", baseURL = BASE_URL) => baseURL + DEFAULT + url;

    const videos = (base, indexVideo) => ({
        BASE : `${base}/${indexVideo}`,
    });

    const materials = (base) => ({
        BASE : `${base}/`,
    });

    const course = (base) => {
        base = `${base}/`;
        return ({
            BASE: formatURL(base),
            MATERIALS: materials(formatURL(`${base}materials`)),
            VIDEOS: (indexVideo = ":indexVideo?") => videos(formatURL(`${base}videos`), indexVideo),
        })
    };

    return {
        ROUTER: course(`:id`),
        REDIRECT: course(id),
    };
};
export default CourseURL;