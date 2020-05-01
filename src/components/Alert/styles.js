import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export const Container = styled(Row)`
    box-shadow: 0 1px 3px #bbb;
    padding: 0;
    background: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.sizes.border_radius};
    overflow: hidden;
`;

export const Header = styled(Row)`
    padding: 10px 15px;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primary};
`;

export const Body = styled(Row)`
    padding: 15px;
`;