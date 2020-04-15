import React from 'react';

import { Container, General, Video } from './styles';

export function VideoPrincipal({ children, ...props }) {
    return (
        <Container {...props}>
            <General>
                <Video
                    url={"https://www.youtube.com/watch?v=ZtMzB5CoekE"}
                />
            </General>
        </Container>
    );
}
export default VideoPrincipal;