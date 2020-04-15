import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { ButtonOutlined } from 'components/Button';

export const Container = styled(Row)`
    
`;

export const LeftContainer = styled(Col).attrs({ xs: 12, sm: 12, md: 5, lg: 4 })`
    display: flex;
    padding:0;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.backgrounds.primary_light};
`;

export const RightContainer = styled(Col).attrs({ xs: 12, sm: 12, md: 7, lg: 8 })`
    display: flex;
    padding:0;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    background: ${({ theme }) => theme.colors.backgrounds.primary};

    @media screen and (max-width: ${({ theme }) => theme.sizes.sm}){
        display: none;
    }
`;

export const Body = styled(Row)`
    flex:1;
    flex-direction:column;
    padding:30px;
    justify-content: center;
    align-items: center;
`;

export const ButtonsContainer = styled(Row)`
    padding: 0;
    margin-top: 15px;
`;

export const OrContainer = styled(Row)`
    padding: 0;
    margin-top: 15px;
    justify-content:center;
    align-items:center;
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};
`;

export const ButtonRegister = styled(ButtonOutlined)`
    width: 100%;
`;

export const Footer = styled(Row)`
    padding: 15px 0;
`;

export const BoxImageRight = styled(Row)`
    justify-content:center;
    align-items: center;
`;

export const ImageRight = styled.img`
    max-width: 100%;
    max-height: 250px;
`;

export const Title = styled(Row)`
    margin-top: 15px;
    text-align: center;
    justify-content:center;
    align-items: center;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.gigantic};
`;