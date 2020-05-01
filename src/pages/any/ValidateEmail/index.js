import React, { useState, useEffect, useContext, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import {
    Container,
    BodyGeneral,
    GeneralContainer,
    Body,
    Footer,
    ResultContainer,
    ResultFooter,
    ResultSymbol,
    ResultTitle,
    ResultHeader,
    ButtonHome,
} from './styles';

import Copyright from 'components/Copyright';
import ComponentLoading from 'components/ComponentLoading';

import Header from './components/Header';

import objectMutation, { VALIDATE_EMAIL } from 'services/api/mutation';
import PageNotFound from 'pages/errors/PageNotFound';
import Struct from 'pages/components/Struct';
import ContextApp from 'context/ContextApp';
import AlignContainer from 'components/AlignContainer';
import { ErrorIcon, SuccessIcon } from 'components/Icons';
import Texts from 'config/Texts';
import { HomeURL } from 'routes/URLs';

export function ValidateEmail() {
    const [result, setResult] = useState("");
    const { authenticated } = useContext(ContextApp);
    const { colors } = useContext(ThemeContext);
    const { token } = useParams();
    const [submit, { loading }] = useMutation(VALIDATE_EMAIL);
    const TEXTS = Texts.PAGE_VALIDATE_EMAIL;

    useEffect(() => {
        (async () => {
            if (token) {
                let OKEY = false;
                try {
                    await submit(objectMutation({ token }))
                        .then(async (response) => {
                            if (response && response.data && response.data.response) {
                                OKEY = true;
                            }
                        })
                        .catch(e => { })
                } catch (error) { }
                setResult(OKEY);
            }
        })()
    }, [token, submit]);

    const General = memo(({ children: childrenGeneral, ...restProps }) => {
        return (!authenticated ? <AlignContainer {...restProps}>{childrenGeneral}</AlignContainer> : childrenGeneral);
    });

    return (
        <Container>
            <ComponentLoading loading={loading}>
                {
                    !token ? (<PageNotFound />) : (
                        <Struct>
                            {
                                !authenticated &&
                                <Header />
                            }
                            <GeneralContainer>
                                <General>
                                    <Body>
                                        <BodyGeneral>
                                            <ResultContainer>
                                                <ResultHeader>
                                                    <ResultSymbol
                                                        color={result ? colors.success : colors.error}
                                                    >
                                                        {result ? <SuccessIcon /> : <ErrorIcon />}
                                                    </ResultSymbol>
                                                </ResultHeader>
                                                <ResultTitle>
                                                    {result ? TEXTS.SUCCESS : TEXTS.ERROR}
                                                </ResultTitle>
                                                <ResultFooter>
                                                    <ButtonHome
                                                        to={HomeURL().REDIRECT.BASE}
                                                        color={result ? colors.success : colors.error}
                                                    >
                                                        {TEXTS.BUTTON_HOME}
                                                    </ButtonHome>
                                                </ResultFooter>
                                            </ResultContainer>
                                        </BodyGeneral>
                                    </Body>
                                    <Footer>
                                        <Copyright center />
                                    </Footer>
                                </General>
                            </GeneralContainer>
                        </Struct>
                    )
                }
            </ComponentLoading>
        </Container>
    );
}
export default ValidateEmail;