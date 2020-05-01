import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { ButtonContained } from 'components/Button';

export const Container = styled(Row)`
    
`;

export const Title = styled(Row)`
    font-weight:bold;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.sizes.fonts.xlarge};
    margin-bottom: 0;
`;

export const Subtitle = styled(Row)`
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    margin-bottom: 10px;
`;

export const Line = styled(Row)`
    & + &{
        margin-top: 10px;
    }
`;

export const BoxResult = styled(Row)`
    margin: 10px 0 5px;
    color : ${({ color, theme }) => color || theme.colors.text };
`;

export const SuccessResult = styled(Row)`
    padding: 0;
`;

export const SuccessResultSymbolContainer = styled(Row)`
    padding: 0;
    margin-bottom: 15px;
    justify-content: center;
`;

export const SuccessResultSymbol = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
`;

export const SuccessResultEmail = styled(Row)`
    margin-bottom: 15px;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
`;

export const SuccessResultTitle = styled(Row)`
    justify-content: center;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    margin-bottom: 0;
`;

export const NotFound = styled(Row)`
    padding: 0;
`;

export const NotFoundSymbolContainer = styled(Row)`
    padding: 0;
    margin-bottom: 10px;
    justify-content: center;
`;

export const NotFoundSymbol = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.white};
`;

export const NotFoundTitle = styled(Row)`
    font-weight: bold;
    justify-content: center;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    margin-bottom: 0;
`;

export const Button = styled(ButtonContained)`
    width: 100%;
    margin-top: 5px;
    height: 40px !important;
`;