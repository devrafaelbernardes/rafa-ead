import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import VideoPlayer from 'components/VideoPlayer';

export const Container = styled(Row)`
    padding: 0;
`;

export const MainPlayer = styled(VideoPlayer)`
    padding: 0;
`;

export const Info = styled(Row)`
    padding: 15px;
`;

export const Title = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled(Row)`
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.text};
    flex-direction: column;
`;