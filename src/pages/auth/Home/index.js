import React from 'react';

import { Container, Title } from './styles';

import Struct from 'pages/components/Struct';
import Texts from 'config/Texts';

import Courses from './components/Courses';

export function Home({ children, ...props }) {
    const TEXTS = Texts.PAGE_AUTH_HOME;
    return (
        <Container {...props}>
            <Struct>
                <Title>
                    {TEXTS.TEXTS.TITLE}
                </Title>

                <Courses />
            </Struct>
        </Container>
    );
}

export default Home;