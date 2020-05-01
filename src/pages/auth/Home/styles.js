import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)``;

export const Title = styled(Row)`
    padding-top: 15px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    line-height: 1;
`;

export const Line = styled(Row)`
    padding: 0 15px;
`;

export const AlertContainer = styled(Row)`
    padding: 15px;
`;