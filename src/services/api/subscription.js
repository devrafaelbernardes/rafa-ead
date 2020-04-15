import gql from 'graphql-tag';
import { IMAGE, STUDENT, COURSE } from './responseAPI';


export const STUDENT_UPDATED = gql`
    subscription SubscriptionStudentUpdated($studentId : ID!){
        response : studentUpdated(studentId:$studentId){
            ${STUDENT.ID}
            ${STUDENT.NAME}
            ${STUDENT.LASTNAME}
            ${STUDENT.FULL_NAME}
            ${STUDENT.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const COURSE_UPDATED = gql`
    subscription SubscriptionCourseUpdated($courseId : ID!){
        response : courseUpdated(courseId:$courseId){
            ${COURSE.ID}
            ${COURSE.NAME}
            ${COURSE.DESCRIPTION}
            ${COURSE.PURCHASE_LINK}
            ${COURSE.COUNT_STUDENTS}
            ${COURSE.COUNT_VIDEOS}
            ${COURSE.PROFILE_IMAGE}{
                ${IMAGE.ID}
                ${IMAGE.URL}
            }
        }
    }
`;

export const objectSubscription = (params) => ({
    variables: { ...params }
});

export default objectSubscription;