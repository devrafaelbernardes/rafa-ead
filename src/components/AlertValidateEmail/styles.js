import styled from 'styled-components';
import Alert from 'components/Alert';
import { Row } from 'react-bootstrap';
import { ButtonOutlined, ButtonContained } from 'components/Button';

export const Container = styled(Alert)`
    padding: 0;
`;

export const Header = styled(Row)`
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const Body = styled(Row)`
    padding: 0;
    margin-top: 10px;
`;

export const ButtonNo = styled(ButtonOutlined)`
    margin-right: 10px;
`;

export const ButtonYes = styled(ButtonContained)``;