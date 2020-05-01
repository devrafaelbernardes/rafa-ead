import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Title, Button, BoxResult, ForgotPasswordButton } from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import InputPassword from 'components/InputPassword';
import Texts from 'config/Texts';
import objectMutation, { DO_LOGIN } from 'services/api/mutation';
import ContextApp from 'context/ContextApp';
import ForgotPasswordURL from 'routes/URLs/ForgotPasswordURL';

export function FormLogon({ children, onSuccess, ...props }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const { doLogin } = useContext(ContextApp);
    const [submit, { loading }] = useMutation(DO_LOGIN);

    const TEXTS = Texts.FORM_LOGON;

    useEffect(() => {
        if (result !== "") {
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

    const login = async () => {
        let OKEY = false;
        try {
            await submit(objectMutation({
                email,
                password
            }))
                .then(async (response) => {
                    if (response && response.data && response.data.response) {
                        const token = response.data.response;
                        if (token && doLogin) {
                            OKEY = true;
                            if (onSuccess) {
                                await onSuccess();
                            }
                            doLogin(token);
                        }
                    }
                })
                .catch(e => { })
        } catch (error) { }
        if (!OKEY) {
            setResult(OKEY);
        }
    }

    return (
        <Container {...props}>
            <Form
                title={
                    <Title>{TEXTS.TITLE}</Title>
                }
                onSubmit={() => login()}
            >
                <Line>
                    <Input
                        required
                        label={TEXTS.EMAIL}
                        placeholder={"example@gmail.com"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Line>
                <Line>
                    <InputPassword
                        required
                        value={password}
                        label={TEXTS.PASSWORD}
                        placeholder={TEXTS.PASSWORD}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Line>
                <Line>
                    <ForgotPasswordButton
                        to={ForgotPasswordURL().REDIRECT.BASE}
                    >
                        {TEXTS.FORGOT_PASSWORD}
                    </ForgotPasswordButton>
                </Line>
                {
                    (result === false) &&
                    <BoxResult color={colors.error}>
                        {TEXTS.LOGIN_ERROR}
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
        </Container>
    );
}
export default FormLogon;