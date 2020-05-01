import React from 'react';

import { Container, General, Body, FormContainer } from './styles';
import HeaderDefault from 'pages/components/HeaderDefault';
import FooterDefault from 'pages/components/FooterDefault';
import FormForgotPassword from 'components/forms/FormForgotPassword';

export function ForgotPassword() {
    return (
        <Container>
            <HeaderDefault />
            <General>
                <Body>
                    <FormContainer>
                        <FormForgotPassword />
                    </FormContainer>
                </Body>
            </General>
            <FooterDefault />
        </Container>
    );
}
export default ForgotPassword;