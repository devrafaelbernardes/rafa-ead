import gql from 'graphql-tag';
import { STUDENT, IMAGE, PAGINATION, COURSE_PREVIEW, PAGE_INFO, COURSE, COURSE_VIDEO, VIDEO, ADMIN, COURSE_MATERIAL, MATERIAL } from './responseAPI';

export const GET_CURRENTY_USER = gql`{   
    response : me_student{
        ${STUDENT.ID}
        ${STUDENT.NAME}
        ${STUDENT.LASTNAME}
        ${STUDENT.FULL_NAME}
        ${STUDENT.PROFILE_IMAGE}{
            ${IMAGE.ID}
            ${IMAGE.URL}
        }
    }
}`;

export const GET_COURSES = gql`
    query QueryGetCoursePreviews($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : courses_preview(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.ITEMS} {
                ${COURSE_PREVIEW.ID}
                ${COURSE_PREVIEW.NAME}
                ${COURSE_PREVIEW.DESCRIPTION}
                ${COURSE_PREVIEW.PURCHASE_LINK}
                ${COURSE_PREVIEW.PROFILE_IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
            ${PAGINATION.PAGE_INFO} {
                ${PAGE_INFO.HAS_PREVIOUS_PAGE}
                ${PAGE_INFO.HAS_NEXT_PAGE}
            }
        }
    }
`;

export const GET_MY_COURSES = gql`
    query QueryGetMedias($pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : courses(pagination : $pagination, orderBy : $orderBy){
            ${PAGINATION.ITEMS} {
                ${COURSE.ID}
                ${COURSE.NAME}
                ${COURSE.DESCRIPTION}
                ${COURSE.PROFILE_IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
            ${PAGINATION.PAGE_INFO} {
                ${PAGE_INFO.HAS_PREVIOUS_PAGE}
                ${PAGE_INFO.HAS_NEXT_PAGE}
            }
        }
    }
`;

export const GET_COURSE = gql`
    query QueryGetCourse($id : ID){
        response : course(id : $id){
            ${COURSE.ID}
            ${COURSE.NAME}
            ${COURSE.DESCRIPTION}
            ${COURSE.COUNT_VIDEOS}
            ${COURSE.INSTRUCTOR}{
                ${ADMIN.FULL_NAME}
                ${ADMIN.PROFILE_IMAGE}{
                    ${IMAGE.ID}
                    ${IMAGE.URL}
                }
            }
            ${COURSE.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const GET_COURSE_VIDEOS = gql`
    query QueryGetCourseVideos($id : ID, $pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : course(id : $id){
            ${COURSE.ID}
            ${COURSE.VIDEOS}(pagination : $pagination, orderBy : $orderBy){
                ${PAGINATION.TOTAL_ITEMS}
                ${PAGINATION.ITEMS}{
                    ${COURSE_VIDEO.ID}
                    ${COURSE_VIDEO.NAME}
                    ${COURSE_VIDEO.DESCRIPTION}
                    ${COURSE_VIDEO.CREATED_AT}
                    ${COURSE_VIDEO.THUMBNAIL}{
                        ${IMAGE.ID}
                        ${IMAGE.URL}
                    }
                    ${COURSE_VIDEO.VIDEO}{
                        ${VIDEO.ID}
                        ${VIDEO.URL}
                    }
                }
            }
        }
    }
`;

export const GET_COURSE_MATERIALS = gql`
    query QueryGetCourseVideos($id : ID, $pagination : InputPagination, $orderBy : [InputOrderQuery!]){
        response : course(id : $id){
            ${COURSE.ID}
            ${COURSE.MATERIALS}(pagination : $pagination, orderBy : $orderBy){
                ${PAGINATION.TOTAL_ITEMS}
                ${PAGINATION.ITEMS}{
                    ${COURSE_MATERIAL.ID}
                    ${COURSE_MATERIAL.NAME}
                    ${COURSE_MATERIAL.CREATED_AT}
                    ${COURSE_MATERIAL.MATERIAL}{
                        ${MATERIAL.ID}
                        ${MATERIAL.URL}
                    }
                }
            }
        }
    }
`;

export const GET_REGISTER_COURSE = gql`
    query QueryGetCourse($token : String){
        response : course_preview(token : $token){
            ${COURSE_PREVIEW.ID}
            ${COURSE_PREVIEW.NAME}
            ${COURSE_PREVIEW.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const getImageUser = (image) => {
    return image && image[IMAGE.URL];
};

export const objectQuery = (params) => ({
    variables: { ...params }
});

export default objectQuery;