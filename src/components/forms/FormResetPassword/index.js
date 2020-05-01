import React, { useState, useEffect, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import {
    Container,
    Line,
    Title,
    Subtitle,
    Button,
    SuccessResultSymbolContainer,
    SuccessResultSymbol,
    BoxResult,
    SuccessResult,
    SuccessResultTitle,
    NotFoundSymbolContainer,
    NotFoundSymbol,
    NotFound,
    NotFoundTitle
} from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import Texts from 'config/Texts';
import objectMutation, { RESET_PASSWORD } from 'services/api/mutation';
import { SuccessIcon, ErrorIcon } from 'components/Icons';
import InputPassword from 'components/InputPassword';
import objectQuery, { IS_VALID_TOKEN_RESET_PASSWORD } from 'services/api/query';
import ComponentLoading from 'components/ComponentLoading';

export function FormResetPassword({ token, children, onSuccess, ...props }) {
    const [isNotFound, setIsNotFound] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const [submit, { loading }] = useMutation(RESET_PASSWORD);
    const { data: dataGet, loading: loadingGet } = useQuery(IS_VALID_TOKEN_RESET_PASSWORD, objectQuery({ token }));

    const TEXTS = Texts.FORM_RESET_PASSWORD;

    useEffect(() => {
        if (dataGet && dataGet.response) {
            setIsNotFound(false);
        } else {
            setIsNotFound(true);
        }
    }, [dataGet]);

    useEffect(() => {
        if (result !== true) {
            let MOUNTED = true;
            const timeout = setTimeout(() => {
                if (MOUNTED) {
                    setResult("");
                }
            }, 2000);

            return () => {
                MOUNTED = false;
                clearTimeout(timeout);
            };
        }
    }, [result]);

    const onSubmit = async () => {
        let OKEY = false;
        try {
            await submit(objectMutation({ email, password, token }))
                .then(async (response) => {
                    if (response && response.data && response.data.response) {
                        OKEY = true;
                    }
                })
                .catch(e => { })
        } catch (error) { }
        setResult(OKEY);
    }

    return (
        <Container {...props}>
            <ComponentLoading loading={loadingGet}>
                {
                    isNotFound &&
                    <NotFound>
                        <NotFoundSymbolContainer>
                            <NotFoundSymbol>
                                <ErrorIcon />
                            </NotFoundSymbol>
                        </NotFoundSymbolContainer>
                        <NotFoundTitle>
                            {TEXTS.NOT_FOUND}
                        </NotFoundTitle>
                    </NotFound>
                }
                {
                    !isNotFound && (result === true) &&
                    <SuccessResult>
                        <SuccessResultSymbolContainer>
                            <SuccessResultSymbol>
                                <SuccessIcon />
                            </SuccessResultSymbol>
                        </SuccessResultSymbolContainer>
                        <SuccessResultTitle>
                            {TEXTS.SUCCESS}
                        </SuccessResultTitle>
                    </SuccessResult>
                }
                {
                    !isNotFound && !(result === true) &&
                    <Form
                        title={
                            <Title>{TEXTS.TITLE}</Title>
                        }
                        subtitle={
                            <Subtitle>{TEXTS.SUBTITLE}</Subtitle>
                        }
                        onSubmit={() => onSubmit()}
                    >
                        <Line>
                            <Input
                                required
                                label={TEXTS.EMAIL}
                                placeholder={"example@gmail.com"}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(String(e.target.value))}
                            />
                        </Line>
                        <Line>
                            <InputPassword
                                required
                                label={TEXTS.PASSWORD}
                                placeholder={"Nova senha"}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(String(e.target.value))}
                            />
                        </Line>
                        {
                            (result === false) &&
                            <BoxResult color={colors.error}>
                                {TEXTS.ERROR}
                            </BoxResult>
                        }
                        <Line>
                            <Button
                                type="submit"
                                loading={loading}
                            >
                                {TEXTS.BUTTON_SUBMIT}
                            </Button>
                        </Line>
                    </Form>
                }
            </ComponentLoading>
        </Container>
    );
}
export default FormResetPassword;