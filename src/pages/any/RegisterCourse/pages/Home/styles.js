import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Image from 'components/Image';
import { ButtonContained, ButtonOutlined } from 'components/Button';

export const Container = styled(Row)``;

export const Header = styled(Row)`
    justify-content: center;
    margin-bottom: 15px;
`;

export const HeaderImage = styled(Image)``;

export const HeaderTitle = styled(Row)`
    margin-top: 15px;
    font-size: ${({ theme }) => theme.sizes.fonts.large};
`;

export const Body = styled(Row)``;

export const ButtonsContainer = styled(Row)``;

export const OrContainer = styled(Row)`
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    padding: 10px 0;
`;

export const ButtonRegisterCourse = styled(ButtonContained)`
    width: 100%;
`;

export const ButtonLogon = styled(ButtonContained)`
    width: 100%;
`;

export const ButtonRegister = styled(ButtonOutlined)`
    width: 100%;
`;

export const BoxResult = styled(Row)`
    padding-bottom: 10px;
    color : ${({ color, theme }) => color || theme.colors.text };
`;