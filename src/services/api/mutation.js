import gql from 'graphql-tag';
import { STUDENT, IMAGE, COURSE_STUDENT } from './responseAPI';

export const DO_LOGIN = gql`
    mutation MutationLoginStudent($input : InputLoginStudent){
        response : loginStudent(input : $input)
    }
`;

export const DO_REGISTER = gql`
    mutation MutationSignUpStudent($input : InputSignUpStudent){
        response : signUpStudent(input : $input)
    }
`;

export const UPDATE_PASSWORD = gql`
    mutation MutationUpdatePasswordStudent($input : InputUpdatePassword){
        response : updatePasswordStudent(input : $input)
    }
`;

export const UPDATE_STUDENT = gql`
    mutation MutationUpdateStudent($input : InputUpdateStudent, $image : Upload){
        response : updateStudent(input : $input, image : $image){
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

export const ADD_COURSE_STUDENT = gql`
    mutation MutationAddCourseStudent($input : InputAddCourseStudent){
        response : addCourseStudent(input : $input){
            ${COURSE_STUDENT.ID}
        }
    }
`;

export const objectMutation = (input, params) => ({
    variables: { input, ...params }
});

export default objectMutation;