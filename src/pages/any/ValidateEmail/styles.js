import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)``;

export const GeneralContainer = styled(Row)`
    justify-content: center;
`;

export const Body = styled(Row)`
    padding: 15px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const BodyGeneral = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 4,
})`
    padding: 30px 15px;
    border-radius: ${({ theme }) => theme.sizes.border_radius};
    border: 1px solid #e9e9e9;
    background: ${({ theme }) => theme.colors.backgrounds.primary_light};
`;

export const ResultContainer = styled(Row)`
    padding: 0;

    & > *{
        justify-content: center;
        text-align: center;
    }
`;

export const ResultHeader = styled(Row)`
    padding: 0;
    margin-bottom: 10px;
`;

export const ResultSymbol = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    border-radius: 100%;
    background: ${({ color }) => color || 'transparent'};
    color: ${({ theme }) => theme.colors.white};
`;

export const ResultTitle = styled(Row)`
    padding: 0;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.sizes.fonts.large};
`;

export const ResultFooter = styled(Row)`
    padding: 0;
`;

export const ButtonHome = styled(ButtonContained)`
    
`;

export const Footer = styled(Row)`
    padding-bottom: 30px;
    margin-top: 50px;
    justify-content: center;
`;