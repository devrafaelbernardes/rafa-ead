import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import AlignContainer from 'components/AlignContainer';
import VideoPlayer from 'components/VideoPlayer';

export const Container = styled(Row)`
    padding: 15px 0;
    justify-content: center;
    align-items: center;
`;

export const General = styled(AlignContainer)`
    padding: 0;
    justify-content: space-between;
    align-items: center;
`;

export const Video = styled(VideoPlayer)`
    width: 100%;
`;