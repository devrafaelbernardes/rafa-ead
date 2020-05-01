import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

//import Texts from 'config/Texts';
import FormLogon from 'components/forms/FormLogon';
import RegisterCourseURL from 'routes/URLs/RegisterCourseURL';
import ContextRegisterCourse from 'context/ContextRegisterCourse';

export function Logon() {
    const { token } = useContext(ContextRegisterCourse);
    const history = useHistory();

    return (
        <Container>
            <FormLogon
                onSuccess={() => history.push(RegisterCourseURL().REDIRECT(token).BASE)}
            />
        </Container>
    );
}
export default Logon;