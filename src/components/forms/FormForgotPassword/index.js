import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Title, Subtitle, Button, SuccessResultEmail, SuccessResultSymbolContainer, SuccessResultSymbol, BoxResult, SuccessResult, SuccessResultTitle } from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import Texts from 'config/Texts';
import objectMutation, { FORGOT_PASSWORD } from 'services/api/mutation';
import { SuccessIcon } from 'components/Icons';

export function FormForgotPassword({ children, onSuccess, ...props }) {
    const [email, setEmail] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const [submit, { loading }] = useMutation(FORGOT_PASSWORD);

    const TEXTS = Texts.FORM_FORGOT_PASSWORD;

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
            await submit(objectMutation({ email }))
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
            {
                (result === true) &&
                <SuccessResult>
                    <SuccessResultSymbolContainer>
                        <SuccessResultSymbol>
                            <SuccessIcon />
                        </SuccessResultSymbol>
                    </SuccessResultSymbolContainer>
                    <SuccessResultEmail>
                        {email}
                    </SuccessResultEmail>
                    <SuccessResultTitle>
                        {TEXTS.SUCCESS}
                    </SuccessResultTitle>
                </SuccessResult>
            }
            {
                !(result === true) &&
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
                            //label={TEXTS.EMAIL}
                            placeholder={"example@gmail.com"}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(String(e.target.value))}
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
        </Container>
    );
}
export default FormForgotPassword;