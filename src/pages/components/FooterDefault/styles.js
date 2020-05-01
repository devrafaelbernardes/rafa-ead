import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import AlignContainer from 'components/AlignContainer';

export const Container = styled(Row)`
    padding: 15px 0;
    justify-content: center;
    align-items: center;
`;

export const General = styled(AlignContainer)`
    padding: 0;
    align-items: center;
`;