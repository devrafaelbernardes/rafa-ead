import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import Avatar from 'components/Avatar';

export const Container = styled(Row)`
    padding:15px;
`;

export const Access = styled(Row)`
    color: ${({ theme }) => theme.colors.text};
    margin-top: 15px;

    & > span{
        margin-left: 10px;
        font-weight: bold;
    }
`;

export const Description = styled(Row)`
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
`;

export const AuthorContainer = styled(Row)`
    flex-direction: column;
    margin-top: 30px;
`;

export const AuthorTitle = styled(Row)`
    font-size: ${({ theme }) => theme.sizes.fonts.large};
    color: #555;
    margin-bottom: 15px;
`;

export const AuthorInfo = styled(Row)`
    align-items: center;
`;

export const AuthorAvatar = styled(Avatar)`
    margin-right: 10px;
`;

export const AuthorName = styled.div`
    font-size: ${({ theme }) => theme.sizes.fonts.normal};
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
`;