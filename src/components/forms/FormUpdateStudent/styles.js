import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';
import Avatar from 'components/Avatar';
import { calcFontSizeAvatar } from 'utils/calcFontSize';

export const Container = styled(Row)``;

export const Line = styled(Row)`
    padding: 0;
    & + &{
        margin-top: 10px;
    }
`;

export const ContainerInputFile = styled.div`
    margin-right: 10px;
`;

export const StudentPreviewContainer = styled(Row)`
    padding: 0;
    margin-bottom: 10px;
`;

export const ProfileImage = styled(Avatar)`
    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        max-width: 100px !important;
        max-height: 100px !important;
        font-size: ${calcFontSizeAvatar(100)}px !important;
    }
`;

export const BoxResult = styled(Row)`
    padding: 10px 0;
    color : ${({ color, theme }) => color || theme.colors.text };
`;

export const Button = styled(ButtonContained)`
    height: 40px !important;
`;