import React from 'react';

import { Container, Image, Title, Header, Body } from './styles';

export function Course({ image = null, title = null, description = null, link = "", componentHeader, componentBody, ...props }) {
    return (
        <Container
            {...props}
        >
            <Header as={componentHeader}>
                <Image
                    fluid
                    src={image}
                />
            </Header>
            <Body as={componentBody}>
                {
                    title &&
                    <Title>{title}</Title>
                }
            </Body>
        </Container>
    );
}
export default Course;