import React, { memo } from 'react';

import {
    Container,
} from './styles';

import Material from 'components/Material';

export const Item = memo(({ id, title, link, ...props }) => {
    return (
        <Container
            {...props}
        >
            <Material
                title={title}
                link={link}
            />
        </Container>
    );
});
export default Item;