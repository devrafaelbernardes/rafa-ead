import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import FormRegister from 'components/forms/FormRegister';
import ContextRegisterCourse from 'context/ContextRegisterCourse';
import RegisterCourseURL from 'routes/URLs/RegisterCourseURL';

export function Register() {
    const { token } = useContext(ContextRegisterCourse);
    const history = useHistory();

    return (
        <Container>
            <FormRegister
                onSuccess={() => history.push(RegisterCourseURL().REDIRECT(token).BASE)}
            />
        </Container>
    );
}
export default Register;