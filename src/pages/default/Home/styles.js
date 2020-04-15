import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import HeaderDefault from './components/Header'
import AlignContainer from 'components/AlignContainer';

export const Container = styled(Row)`
    flex-direction: column;
    background: ${({ theme }) => theme.colors.backgrounds.primary_light};
`;

export const Header = styled(HeaderDefault)``;

export const Body = styled(Row)``;

export const Box = styled(Row)`
    margin-top: 50px;
`;

export const Subbox = styled(Row)`
    justify-content:center;
    align-items:center;
`;

export const Title = styled(AlignContainer)`
    margin-bottom: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    text-transform: uppercase;
`;

export const Footer = styled(Row)`
    padding-bottom: 30px;
    margin-top: 50px;
    justify-content: center;
`;