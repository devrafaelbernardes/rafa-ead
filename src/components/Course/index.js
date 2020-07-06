import React from 'react';

import NoImageSRC from 'assets/images/no-thumbnail.png';

import { Container, Expiration, Image, Title, Header, Body } from './styles';
import { toDateExpiration } from 'utils/convertValue';

export function Course({ image = null, title = null, expiration = null, description = null, link = "", componentHeader, componentBody, ...props }) {
    return (
        <Container
            {...props}
        >
            <Header as={componentHeader}>
                <Image
                    fluid
                    src={image}
                    srcNoImage={NoImageSRC}
                />
            </Header>
            <Body as={componentBody}>
                {
                    title &&
                    <Title>{title}</Title>
                }
                {
                    expiration &&
                    <Expiration>{toDateExpiration(expiration)}</Expiration>
                }
            </Body>
        </Container>
    );
}
export default Course;