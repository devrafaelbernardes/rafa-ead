import React from 'react';

import LogoImageSRC from 'assets/images/logo.png';

import { Container, General, LogoContainer, OptionsContainer, LogoImage, Option, OptionOutlined } from './styles';

import Texts from 'config/Texts';
import { HomeURL, LogonURL } from 'routes/URLs';
import RegisterURL from 'routes/URLs/RegisterURL';

export function Header({ children, ...props }) {
    const TEXTS = Texts.PAGE_DEFAULT_HOME.HEADER;
    return (
        <Container {...props}>
            <General>
                <LogoContainer>
                    <LogoImage src={LogoImageSRC} />
                </LogoContainer>
                <OptionsContainer>
                    <Option
                        to={HomeURL().REDIRECT.BASE}
                    >
                        {TEXTS.BUTTON_HOME}
                    </Option>
                    <Option
                        to={LogonURL().REDIRECT.BASE}
                    >
                        {TEXTS.BUTTON_LOGON}
                    </Option>
                    <OptionOutlined
                        to={RegisterURL().REDIRECT.BASE}
                    >
                        {TEXTS.BUTTON_REGISTER}
                    </OptionOutlined>
                </OptionsContainer>
            </General>
        </Container>
    );
}
export default Header;