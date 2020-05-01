import React from 'react';

import {
    Container,
    Header,
    Body,
    Footer,
    Box,
    Subbox,
    Title,
    GeneralContainerPrincipalVideo,
    ContainerPrincipalVideo,
} from './styles';

import VideoPrincipal from './components/VideoPrincipal';
import Courses from './components/Courses';
import Texts from 'config/Texts';

export function Home() {
    const TEXTS = Texts.PAGE_DEFAULT_HOME.TEXTS;
    return (
        <Container>
            <Header />
            <Body>
                <Box>
                    <GeneralContainerPrincipalVideo>
                        <ContainerPrincipalVideo>
                            <VideoPrincipal />
                        </ContainerPrincipalVideo>
                    </GeneralContainerPrincipalVideo>
                </Box>
                <Box>
                    <Subbox>
                        <Title>
                            {TEXTS.COURSES_TITLE}
                        </Title>
                    </Subbox>
                    <Courses />
                </Box>
            </Body>
            <Footer />
        </Container>
    );
}
export default Home;