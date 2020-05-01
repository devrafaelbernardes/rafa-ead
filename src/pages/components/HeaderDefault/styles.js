import styled from 'styled-components';
import { Row, Image } from 'react-bootstrap';
import AlignContainer from 'components/AlignContainer';
import { ButtonClean, ButtonOutlined, ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    padding: 15px 0;
    justify-content: center;
    align-items: center;
`;

export const General = styled(AlignContainer)`
    padding: 0;
    justify-content: space-between;
    align-items: center;
`;

export const LogoContainer = styled.div`
    display: flex;
    padding: 0;
    justify-content: center;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        width: 100%;
        margin-bottom: 30px;
    }
`;

export const LogoImage = styled(Image)`
    padding: 0;
    max-height: 60px;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        max-height: 100px;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    padding: 0;
    justify-content: center;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        width: 100%;
        flex-direction: column;
    }
`;

export const Option = styled(ButtonClean)`
    margin-left: 10px;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        width: 100%;
        margin-left: 0;
    }
`;

export const OptionContained = styled(ButtonContained)`
    margin-left: 10px;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        width: 100%;
        margin-left: 0;
    }
`;

export const OptionOutlined = styled(ButtonOutlined)`
    margin-left: 10px;

    @media screen and (max-width : ${({ theme }) => theme.sizes.sm}){
        width: 100%;
        margin-left: 0;
    }
`;