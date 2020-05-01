import React, { useState, useEffect, useContext, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { Container, BodyGeneral, GeneralContainer, Body, Footer } from './styles';

import Copyright from 'components/Copyright';
import ComponentLoading from 'components/ComponentLoading';

import Header from './components/Header';

import RouterRegisterCourse from 'routes/RouterRegisterCourse';
import ContextRegisterCourse from 'context/ContextRegisterCourse';
import objectQuery, { GET_REGISTER_COURSE } from 'services/api/query';
import { COURSE_PREVIEW, IMAGE } from 'services/api/responseAPI';
import PageNotFound from 'pages/errors/PageNotFound';
import Struct from 'pages/components/Struct';
import ContextApp from 'context/ContextApp';
import AlignContainer from 'components/AlignContainer';
import RegisterCourseURL from 'routes/URLs/RegisterCourseURL';

export function RegisterCourse() {
    const [courseName, setCourseName] = useState(null);
    const [courseImage, setCourseImage] = useState(null);
    const { authenticated } = useContext(ContextApp);
    const { token } = useParams();
    const { data, loading } = useQuery(GET_REGISTER_COURSE, objectQuery({ token }));
    const REDIRECT_BASE = RegisterCourseURL().REDIRECT(token);
    const linkToLogon = REDIRECT_BASE.LOGON;
    const linkToRegister = REDIRECT_BASE.REGISTER;

    useEffect(() => {
        if (data && data.response) {
            const courseResponse = data.response;
            setCourseName(courseResponse[COURSE_PREVIEW.NAME]);
            setCourseImage(courseResponse[COURSE_PREVIEW.PROFILE_IMAGE] && courseResponse[COURSE_PREVIEW.PROFILE_IMAGE][IMAGE.URL]);
        } else {
            setCourseName(null);
            setCourseImage(null);
        }
    }, [data]);

    let values = {
        token,
        courseName,
        courseImage,
        linkToLogon,
        linkToRegister,
    };

    const General = memo(({ children: childrenGeneral, ...restProps }) => {
        return (!authenticated ? <AlignContainer {...restProps}>{childrenGeneral}</AlignContainer> : childrenGeneral);
    });

    return (
        <Container>
            <ComponentLoading loading={loading}>
                {
                    !courseName ? (<PageNotFound />) : (
                        <Struct>
                            {
                                !authenticated &&
                                <Header />
                            }
                            <GeneralContainer>
                                <General>
                                    <ContextRegisterCourse.Provider value={values}>
                                        <Body>
                                            <BodyGeneral>
                                                <RouterRegisterCourse />
                                            </BodyGeneral>
                                        </Body>
                                        <Footer>
                                            <Copyright center />
                                        </Footer>
                                    </ContextRegisterCourse.Provider>
                                </General>
                            </GeneralContainer>
                        </Struct>
                    )
                }
            </ComponentLoading>
        </Container>
    );
}
export default RegisterCourse;