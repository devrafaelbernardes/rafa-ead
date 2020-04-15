import React, { useContext } from 'react';

import { Container, Description } from './styles';

import ContextCourse from 'context/ContextCourse';
import { COURSE } from 'services/api/responseAPI';
import { toHTML } from 'utils/convertValue';
import Texts from 'config/Texts';

export function Home() {
    let { course } = useContext(ContextCourse);
    const TEXTS = Texts.PAGE_AUTH_COURSE.HOME;

    return (
        <Container>
            <Description>
                {course[COURSE.DESCRIPTION] ? toHTML(course[COURSE.DESCRIPTION]) : TEXTS.NO_DESCRIPTION}
            </Description>
        </Container>
    );
}
export default Home;