import React, { useState, useEffect, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ThemeContext } from 'styled-components';

import { Container, Line, Title, Button, BoxResult, DescriptionTerms, LinkTermsContainer } from './styles';
import Form from 'components/forms/Form';
import Input from 'components/Input';
import InputPassword from 'components/InputPassword';
import Texts from 'config/Texts';
import objectMutation, { DO_REGISTER } from 'services/api/mutation';
import ContextApp from 'context/ContextApp';
import Link from 'components/Link';
import TermsURL from 'routes/URLs/TermsURL';

export function FormRegister({ children, onSuccess, ...props }) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const { colors } = useContext(ThemeContext);
    const { doLogin } = useContext(ContextApp);
    const [register, { loading }] = useMutation(DO_REGISTER);

    const TEXTS = Texts.FORM_REGISTER;

    useEffect(() => {
        if (result !== "") {
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

    const doRegister = async () => {
        let OKEY = false;
        try {
            await register(objectMutation({
                name,
                lastname,
                email,
                password
            }))
                .then(async (response) => {
                    if (response && response.data && response.data.response && response.data.response) {
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
                onSubmit={() => doRegister()}
            >
                <Line>
                    <Input
                        required
                        label={TEXTS.NAME}
                        placeholder={"Seu nome"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Line>
                <Line>
                    <Input
                        required
                        label={TEXTS.LASTNAME}
                        placeholder={"Seu sobrenome"}
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </Line>
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
                    <DescriptionTerms>
                        <span>
                            {TEXTS.DESCRIPTION_TERMS_START}
                        </span>
                        <LinkTermsContainer>
                            <Link
                                to={TermsURL().REDIRECT.BASE}
                            >
                                {TEXTS.TERMS}
                            </Link>
                        </LinkTermsContainer>
                        <span>
                            {TEXTS.DESCRIPTION_TERMS_END}
                        </span>
                    </DescriptionTerms>
                </Line>
                {
                    (result === false) &&
                    <BoxResult color={colors.error}>
                        {TEXTS.REGISTER_ERROR}
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
export default FormRegister;