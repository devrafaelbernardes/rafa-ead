import React, { useContext } from 'react';

import { Container, Title, Line, AlertContainer } from './styles';

import Struct from 'pages/components/Struct';
import Texts from 'config/Texts';

import Courses from './components/Courses';
import AlertValidateEmail from 'components/AlertValidateEmail';
import ContextApp from 'context/ContextApp';

export function Home({ children, ...props }) {
    const { isValidatedEmail } = useContext(ContextApp);
    const TEXTS = Texts.PAGE_AUTH_HOME;

    return (
        <Container {...props}>
            <Struct>
                {
                    !isValidatedEmail &&
                    <AlertContainer>
                        <AlertValidateEmail />
                    </AlertContainer>
                }
                <Line>
                    <Title>
                        {TEXTS.TEXTS.TITLE}
                    </Title>
                </Line>
                <Courses />
            </Struct>
        </Container>
    );
}

export default Home;