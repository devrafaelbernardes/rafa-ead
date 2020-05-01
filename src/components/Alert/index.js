import React from 'react';

import { Container, Header, Body } from './styles';

export function Alert({ children, title, ...props }) {
    return (
        <Container {...props}>
            {
                title &&
                <Header>
                    {title}
                </Header>
            }
            <Body>
                { children }
            </Body>
        </Container>
    );
}
export default Alert;