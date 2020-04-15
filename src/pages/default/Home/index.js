import React from 'react';

import { Container, Header, Body, Footer, Box, Subbox, Title } from './styles';

import Copyright from 'components/Copyright';

//import VideoPrincipal from './components/VideoPrincipal';
import Courses from './components/Courses';
import Texts from 'config/Texts';

export function Home() {
    const TEXTS = Texts.PAGE_DEFAULT_HOME.TEXTS;
    return (
        <Container>
            <Header />
            <Body>
                {/* <Box>
                    <VideoPrincipal />
                </Box> */}
                <Box>
                    <Subbox>
                        <Title>
                            {TEXTS.COURSES_TITLE}
                        </Title>
                    </Subbox>
                    <Courses />
                </Box>
            </Body>
            <Footer>
                <Copyright center />
            </Footer>
        </Container>
    );
}
export default Home;