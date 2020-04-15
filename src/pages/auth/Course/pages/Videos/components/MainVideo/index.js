import React from 'react';

import { Container, Info, Title, Subtitle, MainPlayer } from './styles';

import { toHTML } from 'utils/convertValue';

export function MainVideo({ videoUrl, name, description, ...props }) {
    return (
        <Container {...props}>
            <MainPlayer
                controls
                url={videoUrl}
            />
            <Info>
                <Title>
                    {name}
                </Title>
                {
                    description &&
                    <Subtitle>
                        {toHTML(description)}
                    </Subtitle>
                }
            </Info>
        </Container>
    );
}

export default MainVideo;