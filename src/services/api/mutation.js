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
            ${STUDENT.IS_VALIDATED_EMAIL}
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

export const VALIDATE_EMAIL = gql`
    mutation MutationValidateEmailStudent($input : InputValidateEmail){
        response: validateEmailStudent(input : $input)
    }
`;

export const RESEND_VALIDATE_EMAIL = gql`
    mutation MutationResendValidateEmailStudent{
        response: resendValidateEmailStudent
    }
`;

export const RESET_PASSWORD = gql`
    mutation MutationResetPasswordStudent($input : InputResetPassword){
        response: resetPasswordStudent(input : $input)
    }
`;

export const FORGOT_PASSWORD = gql`
    mutation MutationSendForgotPasswordStudent($input : InputSendForgotPassword){
        response: sendForgotPasswordStudent(input : $input)
    }
`;

export const objectMutation = (input, params) => ({
    variables: { input, ...params }
});

export default objectMutation;