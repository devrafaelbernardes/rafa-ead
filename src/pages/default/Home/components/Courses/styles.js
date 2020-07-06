import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import AlignContainer from 'components/AlignContainer';
import CourseDefault from 'components/Course';
import { ButtonOutlined } from 'components/Button';
import Card from 'components/Card';

export const Container = styled(Row)`
    padding: 0;
    justify-content: center;
    align-items: center;
`;

export const General = styled(AlignContainer)`
    max-width: calc(${({ theme }) => theme.sizes.align_container} + 30px);
    padding: 0;
    justify-content: space-between;
    align-items: center;
`;

export const CourseContainer = styled(Col).attrs({
    xs : 12,
    sm : 12,
    md : 6,
    lg : 4,
})`
    padding: 15px;
`;

export const CourseGeneral = styled(Card)``;

export const Course = styled(CourseDefault)``;

export const BuyButtonContainer = styled(Row)`
    margin-top: 5px;
`;

export const BuyButton = styled(ButtonOutlined)``;

export const Footer = styled(Row)`
    padding: 15px 0;
    justify-content: center;
`;

export const LoadMoreButton = styled(ButtonOutlined)``;