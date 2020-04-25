import React from 'react';

import { Container, General, Video } from './styles';

export function VideoPrincipal({ children, ...props }) {
    return (
        <Container {...props}>
            <General>
                <Video
                    url={"https://youtu.be/9iCQvBva_E4"}
                />
            </General>
        </Container>
    );
}
export default VideoPrincipal;