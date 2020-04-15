import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    padding:15px;
`;

export const Description = styled(Row)`
    display: block !important;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
`;