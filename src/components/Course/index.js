import React from 'react';

import NoImageSRC from 'assets/images/no-thumbnail.png';

import { Container, Expiration, Image, Title, Header, Body } from './styles';
import { toDateExpiration } from 'utils/convertValue';
import Texts from 'config/Texts';

export function Course({ image = null, title = null, expiration = null, description = null, link = "", componentHeader, componentBody, ...props }) {
    const TEXTS = Texts.COURSE;
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
                    <Expiration>{TEXTS.EXPIRATION} {toDateExpiration(expiration)}</Expiration>
                }
            </Body>
        </Container>
    );
}
export default Course;