import React from 'react';

import { Container, ThumbContainer, Info, Title, Subtitle, MainPlayer } from './styles';
import { toDate } from 'utils/convertValue';

export function ThumbVideo({ thumbnail, name, createdAt, ...props }) {
    return (
        <Container {...props}>
            <ThumbContainer>
                <MainPlayer
                    thumbnail={thumbnail}
                />
            </ThumbContainer>
            <Info>
                <Title>
                    {name}
                </Title>
                {
                    createdAt &&
                    <Subtitle>
                        {toDate(createdAt)}
                    </Subtitle>
                }
            </Info>
        </Container>
    );
}

export default ThumbVideo;