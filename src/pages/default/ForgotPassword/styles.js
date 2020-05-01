import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import Struct from 'pages/components/Struct';
import AlignContainer from 'components/AlignContainer';

export const Container = styled(Struct)`
    
`;

export const General = styled(Row)`
    justify-content: center;
`;

export const Body = styled(AlignContainer)`
    justify-content: center;
    padding: 50px 0;
`;

export const FormContainer = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 6,
})`
    padding: 15px;
    border:1px solid #ccc;
    border-radius: ${({ theme }) => theme.sizes.border_radius};
`;