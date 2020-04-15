import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, HeaderImage, Header, HeaderTitle, BoxResult, Body, ButtonLogon, OrContainer, ButtonRegister, ButtonRegisterCourse, ButtonsContainer } from './styles';

import Texts from 'config/Texts';
import ContextRegisterCourse from 'context/ContextRegisterCourse';
import ContextApp from 'context/ContextApp';
import objectMutation, { ADD_COURSE_STUDENT } from 'services/api/mutation';
import { HomeURL } from 'routes/URLs';

export function Home() {
    const [result, setResult] = useState("");
    const history = useHistory();
    const { colors } = useContext(ThemeContext);
    const { authenticated } = useContext(ContextApp);
    const { token, courseName, courseImage, linkToLogon, linkToRegister } = useContext(ContextRegisterCourse);

    const [registerCourse, { loading }] = useMutation(ADD_COURSE_STUDENT); 

    const TEXTS = Texts.PAGE_DEFAULT_REGISTER_COURSE.HOME;

    useEffect(() => {
        if (result !== "" && result === false) {
            let MOUNTED = true;
            const timeout = setTimeout(() => {
                if (MOUNTED) {
                    setResult("");
                }
            }, 2500);

            return () => {
                MOUNTED = false;
                clearTimeout(timeout);
            };
        }
    }, [result]);

    const submit = async() => {
        let OKEY = false;
        try {
            await registerCourse(objectMutation({ token }))
                .then(async(response) => {
                    if(response && response.data && response.data.response){
                        history.push(HomeURL().REDIRECT.BASE);
                        OKEY = true;
                    }
                })
                .catch(e => {})
        } catch (error) {}
        if(!OKEY){
            setResult(false);
        }
    }

    return (
        <Container>
            <Header>
                <HeaderImage
                    src={courseImage}
                />
                <HeaderTitle>
                    {courseName}
                </HeaderTitle>
            </Header>
            <Body>
                {
                    (result === false) &&
                    <BoxResult color={colors.error}>
                        {TEXTS.ERROR}
                    </BoxResult>
                }
                <ButtonsContainer>
                    {
                        authenticated ? (
                            <ButtonRegisterCourse
                                loading={loading}
                                onClick={() => submit()}
                            >
                                {TEXTS.BUTTON_REGISTER_COURSE}
                            </ButtonRegisterCourse>
                        ) : (
                                <>
                                    <ButtonLogon
                                        to={linkToLogon}
                                    >
                                        {TEXTS.BUTTON_LOGON}
                                    </ButtonLogon>
                                    <OrContainer>
                                        {TEXTS.OR}
                                    </OrContainer>
                                    <ButtonRegister
                                        to={linkToRegister}
                                    >
                                        {TEXTS.BUTTON_REGISTER}
                                    </ButtonRegister>
                                </>
                            )
                    }
                </ButtonsContainer>
            </Body>
        </Container>
    );
}
export default Home;