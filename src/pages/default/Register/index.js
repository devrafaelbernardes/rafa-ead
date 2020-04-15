import React from 'react';

import { Container, LeftContainer, RightContainer, Title, Body, OrContainer, Footer, ButtonsContainer, ButtonRegister, BoxImageRight, ImageRight } from './styles';
import LogoImg from 'assets/images/logo.png';
import Copyright from 'components/Copyright';
import FormRegister from 'components/forms/FormRegister';
import Texts from 'config/Texts';
import LogonURL from 'routes/URLs/LogonURL';

export function Register() {
    const TEXTS = Texts.PAGE_REGISTER;
    return (
        <Container>
            <LeftContainer>
                <Body>
                    <FormRegister />
                    <OrContainer>
                        {TEXTS.OR}
                    </OrContainer>
                    <ButtonsContainer>
                        <ButtonRegister
                            to={LogonURL().REDIRECT.BASE}
                        >
                            {TEXTS.BUTTON_LOGON}
                        </ButtonRegister>
                    </ButtonsContainer>
                </Body>
                <Footer>
                    <Copyright
                        center
                    />
                </Footer>
            </LeftContainer>
            <RightContainer>
                <BoxImageRight>
                    <ImageRight
                        src={LogoImg}
                    />
                    <Title>{TEXTS.TITLE}</Title>
                </BoxImageRight>
            </RightContainer>
        </Container>
    );
}
export default Register;