import React, { useMemo } from 'react';

import NoImageSRC from 'assets/images/no-thumbnail.png';

import { Container, Expiration, Image, Title, Header, Body } from './styles';
import { toDateExpiration } from 'utils/convertValue';
import Texts from 'config/Texts';

export function Course({ image = null, title = null, expiration = null, description = null, link = "", componentHeader, componentBody, ...props }) {
    const TEXTS = Texts.COURSE;

    const expirationDate = useMemo(() => {
        try {
            const response = +parseInt(expiration);
            if (response && response > 0) {
                return toDateExpiration(response);
            }
        } catch (error) { }
        return null;
    }, [expiration]);

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
                    expirationDate &&
                    <Expiration>{TEXTS.EXPIRATION} {expirationDate}</Expiration>
                }
            </Body>
        </Container>
    );
}
export default Course;