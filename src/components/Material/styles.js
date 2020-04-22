import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import ImageDefault from 'components/Image';

export const Container = styled(Row)`
    width: 100% !important;
    flex-direction: row;
    align-items: center;
`;

export const Header = styled.div`
    display: flex;
    width: 100% !important;
    min-width: 40px !important;
    max-width: 40px !important;
    margin-right: 15px;
`;

export const Body = styled.div`
    display: flex;
    flex: 1;
`;

export const Image = styled(ImageDefault)`
    width: 100% !important;
`;

export const Title = styled(Row)`
    font-size:${({ theme }) => theme.sizes.fonts.large};
    font-family:${({ theme }) => theme.fonts.normal};
    color:${({ theme }) => theme.colors.text};
`;