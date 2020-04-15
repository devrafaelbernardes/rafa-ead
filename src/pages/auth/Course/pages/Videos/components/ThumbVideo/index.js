import React from 'react';

import { Container, ThumbContainer, Info, Title, Subtitle, MainPlayer } from './styles';
import { toDate } from 'utils/convertValue';

export function ThumbVideo({ videoUrl, name, createdAt, ...props }) {
    return (
        <Container {...props}>
            <ThumbContainer>
                <MainPlayer
                    controls={false}
                    url={videoUrl}
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