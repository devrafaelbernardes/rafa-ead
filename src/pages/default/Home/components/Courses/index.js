import React, { memo, useState, useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Container, General, Course, CourseGeneral, CourseContainer, Footer, LoadMoreButton, BuyButtonContainer, BuyButton } from './styles';
import List from 'components/List';
import objectQuery, { GET_COURSES, getImageUser } from 'services/api/query';
import { objectPagination } from 'services/api/config';
import { COURSE_PREVIEW, PAGINATION, PAGE_INFO } from 'services/api/responseAPI';
import ComponentLoading from 'components/ComponentLoading';
import Texts from 'config/Texts';

const Item = memo(({ href, ...props }) => {
    const TEXTS = Texts.PAGE_DEFAULT_HOME.TEXTS;
    return (
        <CourseContainer>
            <CourseGeneral>
                <Course {...props} />
                {
                    href &&
                    <BuyButtonContainer>
                        <BuyButton
                            href={href}
                            target="_blank"
                        >
                            {TEXTS.BUTTON_BUY}
                        </BuyButton>
                    </BuyButtonContainer>
                }
            </CourseGeneral>
        </CourseContainer>
    )
});

export function Courses({ children, ...props }) {
    const TEXTS = Texts.PAGE_DEFAULT_HOME.TEXTS;
    const INITIAL_PAGE = 1;
    const ITEMS_PER_PAGE = 15;
    const [hasNextPage, setHasNextPage] = useState(false);
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [courses, setCourses] = useState([]);
    const orderBy = [{ column: COURSE_PREVIEW.CREATED_AT, order: "desc" }, { column: COURSE_PREVIEW.NAME, order: "asc" }];
    const { data, loading, fetchMore } = useQuery(GET_COURSES, objectQuery(
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
                            return (
                                <Item
                                    key={key}
                                    image={getImageUser(item[COURSE_PREVIEW.PROFILE_IMAGE])}
                                    href={item[COURSE_PREVIEW.PURCHASE_LINK]}
                                    title={item[COURSE_PREVIEW.NAME]}
                                    expiration={item[COURSE_PREVIEW.MONTHS_TO_EXPIRES]}
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