import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    padding:0;
`;

export const Description = styled(Row)`
    padding:15px;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
`;