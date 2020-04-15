import React, { memo, useState, useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Container, General, Course, CourseContainer, Footer, LoadMoreButton, EnterCourseContainer, ButtonEnterCourse } from './styles';
import List from 'components/List';
import objectQuery, { GET_MY_COURSES } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { PAGINATION, PAGE_INFO, IMAGE, COURSE } from 'services/api/responseAPI';
import ComponentLoading from 'components/ComponentLoading';
import Texts from 'config/Texts';
import CourseURL from 'routes/URLs/CourseURL';

const Item = memo(({ id, ...props }) => {
    const TEXTS = Texts.PAGE_AUTH_HOME.TEXTS;
    return (
        <CourseContainer>
            <Course id={id} {...props} />
            <EnterCourseContainer>
                <ButtonEnterCourse
                    to={CourseURL(id).REDIRECT.BASE}
                >
                    {TEXTS.BUTTON_ENTER_COURSE}
                </ButtonEnterCourse>
            </EnterCourseContainer>
        </CourseContainer>
    )
});

export function Courses({ children, ...props }) {
    const TEXTS = Texts.PAGE_AUTH_HOME.TEXTS;
    const INITIAL_PAGE = 1;
    const ITEMS_PER_PAGE = 15;
    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [courses, setCourses] = useState([]);
    const orderBy = [{ column: COURSE.NAME, order: "asc" }];

    const { data, loading, fetchMore } = useQuery(GET_MY_COURSES, objectQuery(
        objectPagination({
            pageSize: ITEMS_PER_PAGE,
            pageNumber: 1,
            orderBy,
        })
    ));

    const setItems = useCallback((data, more = false) => {
        if (data && data.response && data.response[PAGINATION.ITEMS] && data.response[PAGINATION.ITEMS].length > 0) {
            const items = data.response[PAGINATION.ITEMS];
            const pageInfo = data.response[PAGINATION.PAGE_INFO];
            setCourses(prev => more ? [...prev, ...items] : items);

            if (pageInfo) {
                setHasNextPage(pageInfo[PAGE_INFO.HAS_NEXT_PAGE] === true);
            }
            return;
        }
        setCourses([]);
    }, []);

    const loadMore = useCallback(async (page = null) => {
        try {
            await fetchMore({
                ...objectQuery(
                    objectPagination({
                        pageSize: ITEMS_PER_PAGE,
                        pageNumber: page,
                        orderBy,
                    })
                ),
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult || !fetchMoreResult.response) {
                        return prev;
                    }
                }
            })
                .then(response => {
                    if (response) {
                        setItems(response.data, true);
                    }
                });

            setPageNumber(prev => prev + 1);
        } catch (error) { }
    }, [fetchMore, setItems, orderBy]);

    useEffect(() => {
        setItems(data);
    }, [data, setItems]);

    return (
        <Container {...props}>
            <General>
                <ComponentLoading loading={loading}>
                    <List
                        items={courses}
                        renderItem={(item, key) => {
                            const image = item[COURSE.PROFILE_IMAGE] && item[COURSE.PROFILE_IMAGE][IMAGE.URL];
                            return (
                                <Item
                                    key={key}
                                    image={image}
                                    id={item[COURSE.ID]}
                                    title={item[COURSE.NAME]}
                                />
                            );
                        }}
                    />
                    {
                        hasNextPage && courses && courses.length > 0 &&
                        <Footer>
                            <LoadMoreButton
                                onClick={() => loadMore(pageNumber + 1)}
                            >
                                {TEXTS.BUTTON_LOAD_MORE_COURSES}
                            </LoadMoreButton>
                        </Footer>
                    }
                </ComponentLoading>
            </General>
        </Container>
    );
}
export default Courses;