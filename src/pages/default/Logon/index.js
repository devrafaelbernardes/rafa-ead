import React from 'react';

import { Container, LeftContainer, RightContainer, Title, Body, OrContainer, Footer, ButtonsContainer, ButtonRegister, BoxImageRight, ImageRight } from './styles';
import LogoImg from 'assets/images/logo.png';
import Copyright from 'components/Copyright';
import FormLogon from 'components/forms/FormLogon';
import Texts from 'config/Texts';
import RegisterURL from 'routes/URLs/RegisterURL';

export function Logon() {
    const TEXTS = Texts.PAGE_LOGON;
    return (
        <Container>
            <LeftContainer>
                <Body>
                    <FormLogon />
                    <OrContainer>
                        {TEXTS.OR}
                    </OrContainer>
                    <ButtonsContainer>
                        <ButtonRegister
                            to={RegisterURL().REDIRECT.BASE}
                        >
                            {TEXTS.BUTTON_REGISTER}
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
export default Logon;