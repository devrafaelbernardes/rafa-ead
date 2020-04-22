import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    align-items: center;
    padding: 15px;
    &:hover{
        background: ${({ theme }) => theme.colors.backgrounds.primary_light};
    }
`;