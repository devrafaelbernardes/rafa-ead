import React from 'react';

import { Container, General } from './styles';

import Copyright from 'components/Copyright';

export function FooterDefault({ children, ...props }) {
    return (
        <Container {...props}>
            <General>
                <Copyright center />
            </General>
        </Container>
    );
}
export default FooterDefault;