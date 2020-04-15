import React, { useContext } from 'react';

import { Container, Description, AuthorContainer, AuthorTitle, AuthorInfo, AuthorAvatar, AuthorName } from './styles';

import ContextCourse from 'context/ContextCourse';
import { COURSE, ADMIN } from 'services/api/responseAPI';
import { toHTML } from 'utils/convertValue';
import Texts from 'config/Texts';
import { getImageUser } from 'services/api/query';

export function Home() {
    let { course, instructor } = useContext(ContextCourse);
    const TEXTS = Texts.PAGE_AUTH_COURSE.HOME;

    return (
        <Container>
            <Description>
                {course[COURSE.DESCRIPTION] ? toHTML(course[COURSE.DESCRIPTION]) : TEXTS.NO_DESCRIPTION}
            </Description>

            <AuthorContainer>
                <AuthorTitle>
                    {TEXTS.AUTHOR_TITLE}
                </AuthorTitle>
                {
                    instructor &&
                    <AuthorInfo>
                        <AuthorAvatar
                            title={instructor[ADMIN.FULL_NAME]}
                            image={getImageUser(instructor[ADMIN.PROFILE_IMAGE])}
                        />
                        <AuthorName>
                            {instructor[ADMIN.FULL_NAME]}
                        </AuthorName>
                    </AuthorInfo>
                }
            </AuthorContainer>
        </Container>
    );
}
export default Home;