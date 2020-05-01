import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, General, Body, FormContainer } from './styles';
import HeaderDefault from 'pages/components/HeaderDefault';
import FooterDefault from 'pages/components/FooterDefault';
import FormResetPassword from 'components/forms/FormResetPassword';

export function ResetPassword() {
    const { token } = useParams();
    
    return (
        <Container>
            <HeaderDefault />
            <General>
                <Body>
                    <FormContainer>
                        <FormResetPassword
                            token={token}
                        />
                    </FormContainer>
                </Body>
            </General>
            <FooterDefault />
        </Container>
    );
}
export default ResetPassword;