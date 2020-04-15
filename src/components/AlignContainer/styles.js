import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    max-width: ${({ theme }) => theme.sizes.align_container};
`;