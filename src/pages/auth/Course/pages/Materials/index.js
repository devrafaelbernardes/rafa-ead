import React, { useContext, useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Container, Description } from './styles';

import Item from './components/Item';

import ContextCourse from 'context/ContextCourse';
import { COURSE_MATERIAL, PAGINATION, COURSE, MATERIAL } from 'services/api/responseAPI';
import Texts from 'config/Texts';
import List from 'components/List';
import objectQuery, { GET_COURSE_MATERIALS } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function Materials() {
    const [materials, setMaterials] = useState([]);
    let { id: courseId } = useContext(ContextCourse);
    const { data, loading } = useQuery(GET_COURSE_MATERIALS, objectQuery({ id: courseId }));
    const TEXTS = Texts.PAGE_AUTH_COURSE.MATERIALS;

    useEffect(() => {
        if (data && data.response && data.response[COURSE.MATERIALS] && data.response[COURSE.MATERIALS][PAGINATION.ITEMS] && data.response[COURSE.MATERIALS][PAGINATION.ITEMS].length > 0) {
            setMaterials(data.response[COURSE.MATERIALS][PAGINATION.ITEMS]);
        }
    }, [data]);

    return (
        <Container>
            <ComponentLoading loading={loading}>
                <Description>
                    {TEXTS.DESCRIPTION}
                </Description>
                <List
                    items={materials}
                    renderItem={(item, key) => {
                        return (
                            <Item
                                key={key}
                                title={item[COURSE_MATERIAL.NAME]}
                                link={item[COURSE_MATERIAL.MATERIAL] && item[COURSE_MATERIAL.MATERIAL][MATERIAL.URL]}
                            />
                        );
                    }}
                />
            </ComponentLoading>
        </Container>
    );
}
export default Materials;