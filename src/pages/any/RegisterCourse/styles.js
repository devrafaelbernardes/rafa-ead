import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

export const Container = styled(Row)``;

export const GeneralContainer = styled(Row)`
    justify-content: center;
`;

export const Body = styled(Row)`
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
    padding: 15px;
    border-radius: ${({ theme }) => theme.sizes.border_radius};
    border: 1px solid #e9e9e9;
    background: ${({ theme }) => theme.colors.backgrounds.primary_light};
`;

export const Footer = styled(Row)`
    padding-bottom: 30px;
    margin-top: 50px;
    justify-content: center;
`;