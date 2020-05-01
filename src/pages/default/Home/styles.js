import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import HeaderDefault from 'pages/components/HeaderDefault'
import AlignContainer from 'components/AlignContainer';
import FooterDefault from 'pages/components/FooterDefault';

export const Container = styled(Row)`
    flex-direction: column;
    background: ${({ theme }) => theme.colors.backgrounds.primary_light};
`;

export const Header = styled(HeaderDefault)``;

export const Body = styled(Row)``;

export const Box = styled(Row)`
    margin-top: 50px;
`;

export const GeneralContainerPrincipalVideo = styled(Row)`
    justify-content: center;
`;

export const ContainerPrincipalVideo = styled(Row)`
    max-width: 850px;
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

export const Footer = styled(FooterDefault)``;