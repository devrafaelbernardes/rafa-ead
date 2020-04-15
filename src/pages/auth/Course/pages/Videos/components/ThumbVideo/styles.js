import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import VideoPlayer from 'components/VideoPlayer';

export const Container = styled(Row)`
    padding: 0;
`;

export const MainPlayer = styled(VideoPlayer)`
    padding: 0;
`;

export const ThumbContainer = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 3,
    lg : 3,
})`
    flex-direction: column;
    display: flex;
    padding: 0;
    justify-content: center;
`;

export const Info = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 9,
    lg : 9,
})`
    flex-direction: column;
    display: flex;
    padding: 0 15px;
    justify-content: center;

    @media screen and (max-width: ${({ theme }) => theme.sizes.sm}){
        padding: 15px 0 0;
    }
`;

export const Title = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.small};
    color: ${({ theme }) => theme.colors.text_light};
`;