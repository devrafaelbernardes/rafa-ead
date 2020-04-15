import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import CourseDefault from 'components/Course';
import { ButtonOutlined } from 'components/Button';

export const Container = styled(Row)`
    padding: 0;
    justify-content: center;
    align-items: center;
`;

export const General = styled(Row)`
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

export const Course = styled(CourseDefault)``;

export const Footer = styled(Row)`
    padding: 15px 0;
    justify-content: center;
`;

export const LoadMoreButton = styled(ButtonOutlined)``;

export const EnterCourseContainer = styled(Row)`
    padding: 0;
`;

export const ButtonEnterCourse = styled(ButtonOutlined)`
    margin-top: 5px;
`;