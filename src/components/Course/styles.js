import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import ImageDefault from 'components/Image';

export const Container = styled(Row)`
    width: 100% !important;
`;

export const Header = styled(Row)`
    width: 100% !important;
    background: #e9e9e9;
`;

export const Body = styled(Row)`
    padding: 10px 0 0;
    width: 100% !important;
`;

export const Image = styled(ImageDefault)`
    width: 100% !important;
`;

export const Title = styled(Row)`
    font-size:${({ theme }) => theme.sizes.fonts.large};
    font-family:${({ theme }) => theme.fonts.normal};
    margin-bottom: 5px;
`;

export const Expiration = styled(Row)`
    font-size:${({ theme }) => theme.sizes.fonts.normal};
    font-family:${({ theme }) => theme.fonts.normal};
    color:${({ theme }) => theme.colors.secondary};
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Description = styled(Row)`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:${({ theme }) => theme.sizes.fonts.small};
    font-family:${({ theme }) => theme.fonts.normal};
`;