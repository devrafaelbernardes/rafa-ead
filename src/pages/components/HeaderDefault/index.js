import React, { useContext } from 'react';

import LogoImageSRC from 'assets/images/logo.png';

import { Container, General, LogoContainer, OptionsContainer, OptionContained, LogoImage, Option, OptionOutlined } from './styles';

import Texts from 'config/Texts';
import { HomeURL, LogonURL } from 'routes/URLs';
import RegisterURL from 'routes/URLs/RegisterURL';
import { ThemeContext } from 'styled-components';

export function HeaderDefault({ children, ...props }) {
    const TEXTS = Texts.HEADER_DEFAULT;
    const { colors } = useContext(ThemeContext);
    return (
        <Container {...props}>
            <General>
                <LogoContainer>
                    <LogoImage src={LogoImageSRC} />
                </LogoContainer>
                <OptionsContainer>
                    <OptionContained
                        href={"http://www.lojarbernardes.com.br/pd-73A398.html"}
                        color={colors.secondary}
                        target="_blank"
                    >
                        {TEXTS.BUTTON_BUY_COURSES}
                    </OptionContained>
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
export default HeaderDefault;