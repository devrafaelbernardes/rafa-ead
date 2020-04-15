import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Link from 'components/Link';

export const Container = styled(Row)`
    padding: 15px;
`;

export const MainVideoContainer = styled(Row)`
    padding: 0;
    background: ${({ theme }) => theme.colors.backgrounds.primary_light};
`;

export const VideosContainer = styled(Row)`
    padding: 0;
    background: ${({ theme }) => theme.colors.backgrounds.primary_light};
`;

export const NotFoundContainer = styled(Row)`
    padding: 0;
`;

export const NotFoundTitle = styled(Row)`
    padding: 0;
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    color: ${({ theme }) => theme.colors.text};
`;

export const ItemContainer = styled(Link)`
    width: 100%;
    padding: 15px;

    background: ${({ theme, active }) => active ? theme.colors.backgrounds.primary_dark : 'transparent'};
`;

export const PlaylistTitle = styled(Row)`
    padding: 15px 15px 5px;
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
`;